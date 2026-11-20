import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import SummaryCards from '../sections/budgetsPage/SummaryCards';
import ProgressBarCard from '../sections/budgetsPage/ProgressBarCard';
import CategoryCards from '../components/CategoryCards';
import CategoryGrid from '../sections/budgetsPage/CategoryGrid';
import { categories } from '../data/categories';

export default function Budgets() {
  const [budget, setBudget] = useState(null);
  const [spent, setSpent] = useState(0);
  const [spentByCategory, setSpentByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const budgetsResponse = await fetch("http://localhost:4000/budgets");
        if (!budgetsResponse.ok) throw new Error("Failed to load budget");
        const budgets = await budgetsResponse.json();
        if (budgets.length > 0) {
          setBudget(budgets[budgets.length - 1]);
        }

        const expensesResponse = await fetch("http://localhost:4000/expenses");
        if (!expensesResponse.ok) throw new Error("Failed to load expenses");
        const expenses = await expensesResponse.json();

        setSpent(expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0));

        const totals = {};
        categories.forEach((category) => {
          totals[category.fieldName] = 0;
        });
        expenses.forEach((expense) => {
          if (totals[expense.category] !== undefined) {
            totals[expense.category] += Number(expense.amount || 0);
          }
        });
        setSpentByCategory(totals);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <p className="container py-5">Loading...</p>;
  if (error) return <p className="container py-5 text-danger">{error}</p>;

  if (budget === null) {
    return (
      <div className="container py-5">
        <p className="text-muted mt-2">Create your budget first</p>
        <Link to="/get-started">Get started</Link>
      </div>
    );
  }

  const semesterBudget = Number(budget.semesterBudget) || 0;
  const left = semesterBudget - spent;
  const percentage = semesterBudget > 0 ? Math.round((spent / semesterBudget) * 100) : 0;

  return (
    <div className="container py-4">
      <h1>Make room for what matters.</h1>
      <p className="text-muted small mb-3">
        Plan your budget today and have more confidence throughout the semester
      </p>

      <SummaryCards
        semesterBudget={semesterBudget}
        spent={spent}
        left={left}
        percentage={percentage}
        semester={budget.semester}
      />

      <ProgressBarCard
        semesterBudget={semesterBudget}
        spent={spent}
        left={left}
        percentage={percentage}
      />

      {budget.categories ? (
        <CategoryGrid limits={budget.categories} spentByCategory={spentByCategory} />
      ) : (
        <CategoryCards budget={budget} onSaved={setBudget} />
      )}
    </div>
  );
}
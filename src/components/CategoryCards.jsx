import { useState } from 'react';
import { categories } from '../data/categories';
import { money } from '../moneyFormat.js/money'; 

export default function CategorySetup({ budget, onSaved }) {
  const [limits, setLimits] = useState({ tuition: "", campusLife: "", dining: "", books: "" });
  const [error, setError] = useState("");

  const semesterBudget = Number(budget.semesterBudget);
  const allocated = Object.values(limits).reduce((sum, value) => sum + Number(value), 0);

  function handleChange(event) {
    setLimits({ ...limits, [event.target.name]: event.target.value });
  }

  async function handleSave() {
    if (Object.values(limits).some((value) => Number(value) <= 0)) {
      setError("Enter a limit above 0 for every category.");
      return;
    }

    if (allocated > semesterBudget) {
      setError(`Your limits add up to ${money(allocated)}, more than your semester budget of ${money(semesterBudget)}.`);
      return;
    }

    const numericLimits = {};
    categories.forEach((category) => {
      numericLimits[category.fieldName] = Number(limits[category.fieldName]);
    });

    try {
      const response = await fetch(`http://localhost:4000/budgets/${budget.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categories: numericLimits }),
      });
      if (!response.ok) throw new Error("Could not save your limits");

      const saved = await response.json();
      setError("");
      onSaved(saved);
    } catch (err) {
      setError("Could not save your limits. Is the server running?");
    }
  }

  return (
    <div className="card bg-white border rounded-3 mb-4">
      <div className="card-body">
        <h2 className="h5">Set your category limits</h2>
        <p className="text-muted small">Split your {money(semesterBudget)} across your categories.</p>

        {categories.map((category) => (
          <div key={category.id} className="mb-3">
            <label htmlFor={category.fieldName} className="form-label">
              {category.categoryName}
            </label>
            <input
              id={category.fieldName}
              name={category.fieldName}
              value={limits[category.fieldName]}
              onChange={handleChange}
              type="number"
              className="form-control"
            />
          </div>
        ))}

        <p className="small">
          Allocated: {money(allocated)} · Left to allocate: {money(semesterBudget - allocated)}
        </p>
        {error && <div className="text-danger small mb-2">{error}</div>}
        <button className="btn btn-success" onClick={handleSave}>Save limits</button>
      </div>
    </div>
  );
}
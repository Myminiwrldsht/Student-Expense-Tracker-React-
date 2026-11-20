import {useContext, useState, useEffect} from 'react';
import {BudgetContext} from '../contexts/BudgetContext';

export default function useBudgets() {
// const totalLimit = budgets.reduce((sum, b) => sum + Number(b.limit), 0);
// const totalSpent = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
// const remaining = totalLimit - totalSpent;
// const overallPercentage = totalLimit > 0 ? Math.round((totalSpent / totalLimit) * 100) : 0;
    return useContext(BudgetContext);
}
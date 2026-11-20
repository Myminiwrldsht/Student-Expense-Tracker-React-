import {useContext} from 'react';
import {BudgetContext} from '../contexts/BudgetContext';

export default function useBudgets() {
    return useContext(BudgetContext);
}
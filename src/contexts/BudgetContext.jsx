import {createContext, useState} from 'react';

export const BudgetContext = createContext();

export default function BudgetProvider({children}) {
    const [budgets, setBudgets] = useState(null);

    return(
        <BudgetContext.Provider value ={{budgets, setBudgets}}>
            {children}
        </BudgetContext.Provider>

    )

}

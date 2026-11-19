import {createContext, useState} from 'react';

export const ExpenseContext = createContext();

export default function BudgetProvider({children}) {
    const [expenses, setExpenses] = useState([]);

    return(
        <ExpenseContext.Provider value ={{expenses, setExpenses}}>
            {children}
        </ExpenseContext.Provider>

    )

}
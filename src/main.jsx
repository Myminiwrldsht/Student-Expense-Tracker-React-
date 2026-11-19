import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router'
import BudgetProvider from './contexts/BudgetContext.jsx'
import ExpenseProvider from './contexts/ExpenseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BudgetProvider>
      <ExpenseProvider>
   <BrowserRouter>
   
  <App />
  
   </BrowserRouter>
   </ExpenseProvider>
   </BudgetProvider>
  </StrictMode>,
)

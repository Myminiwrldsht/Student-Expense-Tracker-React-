import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router'
import BudgetProvider from './contexts/BudgetContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BudgetProvider>
   <BrowserRouter>
   
  <App />
  
   </BrowserRouter>
   </BudgetProvider>
  </StrictMode>,
)

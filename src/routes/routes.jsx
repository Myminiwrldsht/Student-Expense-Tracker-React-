import {Route, Routes} from 'react-router';
import GetStarted from '../pages/GetStarted.jsx'
import Home from '../pages/Home'
import Budgets from '../pages/Budgets'
import Transactions from '../pages/Transactions.jsx'
import Layout from '../components/Layout.jsx';

export default function AppRoutes() {
    return(
      
   <Routes>
    <Route path= "/" element={<Home />}/>
    <Route path="/get-started" element={<GetStarted />}/>
    <Route element={<Layout />}> 
    <Route path="/transactions" element={<Transactions />}/>
    <Route path="/budgets" element={<Budgets/>}/>
    </Route>
   </Routes>
  
    )
}
import {Route, Routes} from 'react-router';
import GetStarted from '../pages/GetStarted.jsx'
import Home from '../pages/Home'

export default function AppRoutes() {
    return(
      
   <Routes>
    <Route path= "/" element={<Home />}/>
    <Route path="/get-started" element={<GetStarted />}/>
   </Routes>
  
    )
}
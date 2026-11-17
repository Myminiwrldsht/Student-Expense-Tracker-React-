import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import GetStarted from './pages/GetStarted.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path= "/" element={<App />}/>
    <Route path="/get-started" element={<GetStarted />}/>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)

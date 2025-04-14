import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import './index.css'
import App from './App.jsx'
import AboutUs from './components/About/AboutUs.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import LandingPage from './components/Landing Page/LandingPage.jsx'



const router= createBrowserRouter (
  
  createRoutesFromElements (

  <Route path="/" element={<App/>}>
    <Route path="/" element={<LandingPage/>} />
    <Route path="about" element={<AboutUs/>} />
    <Route path="contact" element={<ContactUs/>} />
  </Route>

  )

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)

import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import './pages/Home.css'
import Register from './pages/Register'
import ContactSection from './pages/Contact'
import AboutSection from './pages/About'
import ProductSection from './pages/Products'



const router = createBrowserRouter([
    {
      path: "/",
      element:<GeneralInformation/>
    },
    {
      path: "/Productos",
      element:<ProductSection/>
    },
    {
      path:"/Contacto",
      element:<ContactSection/>
    },
    {
      path:"/Login",
      element:<Login/>
    }
  
    
  ])
  
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )
  
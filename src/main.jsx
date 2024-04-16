import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from "./Components/Store-page/Store.jsx"
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About_page/About.jsx'
import Contact from './Components/Contact_page/Contact.jsx'
import SignIn from './Components/SignIn_page/SignIn.jsx'
import LogIn from './Components/LogIn_page/LogIn.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/store",
    element: <Store/>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/login',
    element: <LogIn />
  },
      
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)

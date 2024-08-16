import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

//createBrowserRouter method aa ik react router da jide andr array aa te ode andr list of object needed
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  // RouterProvider ik component aa jhera props lenda bina props to km nhi krda
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

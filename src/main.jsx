import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Heart from './components/Heart.jsx'
import PartyPopper from './components/PartyPopper.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PartyPopper/>}>
      

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


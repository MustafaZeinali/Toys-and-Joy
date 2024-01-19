import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
 import router from './routes/ConfigRoutes.jsx'
import App from './App.jsx'
import './index.css'
// sen ska lägga till Routerprovider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

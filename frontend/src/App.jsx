import React from 'react'
import './App.css'
import { HashRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes.jsx"
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <HashRouter>
        <AppRoutes />
        <Toaster position='bottom-right' />
      </HashRouter>
    </>
  )
}

export default App; 
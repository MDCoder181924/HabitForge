import React from 'react'
import './App.css'
import { HashRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes.jsx"

const App = () => {
  return (
    <>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </>
  )
}

export default App; 
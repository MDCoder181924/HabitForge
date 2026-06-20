import React from 'react'
import './App.css'
import { HashRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes.jsx"
import { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/UserContext.jsx'
import { HabitProvider } from './context/HabitContext.jsx'

const App = () => {
  return (
    <>
      <HashRouter>
        <UserProvider>
          <HabitProvider>
            <AppRoutes />
            <Toaster position='bottom-right' />
          </HabitProvider>
        </UserProvider >
      </HashRouter>
    </>
  )
}

export default App; 
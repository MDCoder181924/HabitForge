import React from 'react'
import './App.css'
import { HashRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes.jsx"
import { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/UserContext.jsx'
import { HabitProvider } from './context/HabitContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <>
      <HashRouter>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <UserProvider>
            <HabitProvider>
              <AppRoutes />
              <Toaster position='bottom-right' />
            </HabitProvider>
          </UserProvider >
        </GoogleOAuthProvider>
      </HashRouter>
    </>
  )
}

export default App; 
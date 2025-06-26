import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { AppContextProvider } from './constext/AppContext'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <AppContextProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </AppContextProvider>
    </>
  )
}

export default App

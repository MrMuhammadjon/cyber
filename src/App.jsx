import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { AppContextProvider } from './constext/AppContext'
import { Outlet } from 'react-router-dom'
import Applecategory from './components/PageComponents/Applecategory'

const App = () => {
  return (
    <>
    <AppContextProvider>
      <Header/>
      <Outlet/>
      <Applecategory/>
      <Footer/>
    </AppContextProvider>
    </>
  )
}

export default App

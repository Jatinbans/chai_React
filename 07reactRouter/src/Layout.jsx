import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//dynamically cheeja pass krnia ethe fragment de andr
import { Outlet } from 'react-router-dom'
//outlet - layout ko as a base use krega and iske andr jo cheej jaye gi uske uper niche sb same

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout

// eh sarra km apa app,=.jsx ch vi kr skde aa
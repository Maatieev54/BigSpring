import React from 'react'
import Header  from '../Inc/Header'
import Footer from '../Inc/Footer'
import { Outlet } from 'react-router'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout

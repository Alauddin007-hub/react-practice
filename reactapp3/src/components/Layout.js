import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ServiceContextProvider from './ServiceContext'




export default function Layout() {
  return (
    <>
      <ServiceContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </ServiceContextProvider>
    </>
  )
}

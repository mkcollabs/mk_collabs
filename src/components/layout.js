import React from "react"

import Navbar from './nav/nav'

import './css/shared.css'

const Layout = ({children }) => {
  return (
    <>
    <Navbar/>
    <main style={{textAlign:"center"}}>{children}</main>
    <footer style={{background: '#000', color: '#fff', padding: '2rem', textAlign:'center'}}>
    Copyright © {new Date().getFullYear()}, All Rights Reserved, MK COLLABS
      </footer>
    </>
  )
}

export default Layout

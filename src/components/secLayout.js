import React from "react"

import Navbar from './secNav'

import './css/shared.css'

const Layout = ({children }) => {
  return (
    <>
    <Navbar/>
    <main style={{textAlign:"center"}}>{children}</main>
    <footer style={{background: '#000', color: '#fff', padding: '2rem', textAlign:'center'}}>
        © {new Date().getFullYear()}, Built by knight
      </footer>
    </>
  )
}

export default Layout

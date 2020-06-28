import React from "react"

import { rhythm, scale } from "../utils/typography"


const Layout = ({ children }) => {
  return (
    <>
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <main>{children}</main>
    </div>
    <footer style={{background: '#000', color: '#fff', padding: '2rem', textAlign:'center'}}>
        © {new Date().getFullYear()}, Built by knight
      </footer>
    </>
  )
}

export default Layout

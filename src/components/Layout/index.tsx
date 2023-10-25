import React from 'react'
import Navbar from "../Navbar"

interface LayoutProps {
  children: React.ReactNode,
}
const Layout = (props: LayoutProps) => {
  const { children } = props
  
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
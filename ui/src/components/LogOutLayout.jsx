import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LogOutLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <main>{children}</main>
      
    </div>
  )
}

export default LogOutLayout

import React from 'react'
import HeaderHome from '../HeaderHome'

const Layout = ({children}) => {
  return (
    <div>
      <HeaderHome />
      {children}
    </div>
  )
}

export default Layout

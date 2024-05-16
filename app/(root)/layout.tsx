import FooterComponent from '@/components/footer/FooterUtil'
import NavbarComponent from '@/components/navbar/NavbarUtil'
import React from 'react'

const HomePages = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <NavbarComponent />
        {children}
        <FooterComponent />
    </div>
  )
}

export default HomePages
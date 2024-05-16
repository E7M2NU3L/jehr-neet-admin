import React from 'react'

const isLoggedin = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default isLoggedin
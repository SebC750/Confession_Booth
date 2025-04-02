import React from 'react'

const Button = ({variant, children, ...props}) => {
  return (
    <button 
    className={`btn btn-${variant}`}
    {...props}
    >{children}</button>
  )
}

export default Button
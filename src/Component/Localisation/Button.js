import React from 'react'

const Button = (props) => {
  const mesCss = `btn ${props.color}`
  return (
    
     <button 
     className={mesCss} 
     onClick={props.click}>
     {props.name}
     </button>
      
  
  )
}
export  default Button;

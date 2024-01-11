import React from 'react'

const Button = ({children, devInfo, devGroup, addDevToGroup, saveForms}) => {
  
  return (
    <button type='submit' name='Cardbutton' onClick={(e) => {saveForms(e)}}>
        {children}
    </button>
  )
}

export default Button
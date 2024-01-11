import React from 'react'
import './OptionList.css'

const OptionList = (props) => {

  // Adiciona a propriedade time no state devInfo
  const changeOption = (value) => {
    props.changeDevInfo({...props.devInfo, time: value })
  }

  return (
    <div className='OptionList'>
        <label>{props.label}</label>
        <select onChange={(e) =>  changeOption(e.target.value)}>
          <option key="emptyOption"></option>
            {props.items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
    
  )
}

export default OptionList
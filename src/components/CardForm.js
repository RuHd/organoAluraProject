import React, { useState } from 'react'
import './CardForm.css'
import Button from './Button'
import OptionList from './OptionList'
import timesInfo from '../utils/timesInfo'
import { useEffect } from 'react'

const FieldForm = (props) => {
    
  // Adiciona valores às propriedades do state devInfo
    const changeInput = (ev) => {
      
      switch(props.label) {
        case 'Nome':
          props.changeDevInfo({ ...props.devInfo, nome: ev.target.value})
          break
        case 'Cargo':
          props.changeDevInfo({...props.devInfo, cargo: ev.target.value})
          break
        case 'Imagem':
          props.changeDevInfo({...props.devInfo, imagem: ev.target.value})
          break
      }
      
    }

     return (
          <label>
            <span>{props.label}</span>
            <input placeholder={props.placeholder} required onChange={changeInput} /> 
          </label>
     )
}

const CardForm = (props) => {

  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")

  // Adiciona um novo colaborador na array devGroup

  const saveForms = (ev) => {

   ev.preventDefault()
   props.addDevToGroup([...props.valueGroup, props.devInfo])

   console.log(props.devInfo)

   setNome("")
   setCargo("")
   setImagem("")

  }

  return (
    <form className='CardForm'>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <FieldForm label={"Nome"} placeholder={"Digite seu Nome"} devInfo={props.devInfo} changeDevInfo={devInfo => props.setdevInfo(devInfo)}  nome={nome} setNome={setNome}/>
        <FieldForm label={"Cargo"} placeholder={"Digite seu Cargo"} devInfo={props.devInfo} changeDevInfo={devInfo => props.setdevInfo(devInfo)}  cargo={cargo} setCargo={setCargo}/>
        <FieldForm label={"Imagem"} placeholder={"Informe o endereço da imagem"} devInfo={props.devInfo} changeDevInfo={devInfo => props.setdevInfo(devInfo)}  imagem={imagem} setImagem={setImagem}/>
        <OptionList label={"Time"} items={timesInfo.map(time => time.nome)} devInfo={props.devInfo} changeDevInfo={devInfo => props.setdevInfo(devInfo)} /> 
        <Button devInfo = {props.devInfo} valueGroup={props.valueGroup} addDevToGroup={props.addDevToGroup}  saveForms = {saveForms}>
            Criar Card
        </Button>
    </form>
  )
}

export default CardForm
import React from 'react'
import './Time.css'
import timesInfo from '../utils/timesInfo'
import CardDev from './CardDev'


const Time = (props) => {
  

  return (
    // Renderiza somente se há algum colaborador cadastrado

     props.colaboradores.length > 0 && <section className='Time' style={{backgroundColor: props.corSecundaria}}>
        <h2 style={{borderColor: props.corPrimaria }}>{props.nome}</h2>
        <div className='Colaboradores'> 
            {props.colaboradores.map(dev => <CardDev key={dev.nome} corCard={props.corPrimaria} devNome={dev.nome} devTime = {dev.time} devCargo = {dev.cargo} timeNome = {props.nome} imagem = {dev.imagem}/>  )}
        </div>
    </section>
  )
}

export default Time
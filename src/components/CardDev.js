import React from 'react'
import './CardDev.css'

const CardDev = (props) => {

  return (
    // O Card só renderiza se o colaborador fazer parte da equipe em questão.
    props.timeNome === props.devTime && <div className='CardDev' >
        <span style={{backgroundColor: props.corCard}}></span>
        <section>
            <img src={props.imagem} alt={props.devNome}/>
            <div className='DevInfo'>
                <h3>{props.devNome}</h3>
                <h4>{props.devCargo}</h4>
            </div>
            
        </section>
        
        
    </div>
  )
}

export default CardDev
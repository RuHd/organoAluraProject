
import { useEffect, useState } from 'react';
import Banner from './components/Banner.js';
import CardForm from './components/CardForm.js';
import Time from './components/Time.js';
import CardDev from './components/CardDev.js';
import timesInfo from './utils/timesInfo.js';
import './App.css'

function App() {

  // State para o registro de um colaborador pelo CardForm
  const [devInfo, setdevInfo] = useState({
    nome: "",
    cargo: "",
    imagem: "",
    time: ""
  })

  const [devGroup, setDevGroup] = useState([])

  return (
    <div className="App">
        <Banner/>
        <CardForm devInfo = {devInfo} setdevInfo = {setdevInfo} valueGroup = {devGroup} addDevToGroup = {valueGroup => setDevGroup(valueGroup)}/>
        <h1>Minha Organização</h1>
        <section className='time-section'>
            {timesInfo.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria = {time.corSecundaria} colaboradores={devGroup}/>)}
        </section>
        
    </div>
  );
}

export default App;

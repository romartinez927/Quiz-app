import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [puntuacion, setPuntuacion] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [pais, setPais] = useState("")
  const [paisRandom, setPaisRandom] = useState("")


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPaisRandom(data)
      setPais(data[getRandomInt(250)])
    })
  }, [])

  console.log(pais)
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="App">
      <div>
        <h4>{pais.capital} is the Capital of</h4>
        <p>{pais !== "" && paisRandom[getRandomInt(250)].name.common}</p>
        <p>--{pais !== "" && pais.name.common}</p>
        <p>{pais !== "" && paisRandom[getRandomInt(250)].name.common}</p>
        <p>{pais !== "" && paisRandom[getRandomInt(250)].name.common}</p>
      </div>
      <div>
        <img src={pais !== "" && pais.flags.png}></img>
        <h4>which country does this flag belong to?</h4>
        <p>{pais !== "" && paisRandom[getRandomInt(250)].capital}</p>
        <p>--{pais !== "" && pais.capital}</p>
        <p>{pais !== "" && paisRandom[getRandomInt(250)].capital}</p>
        <p>{pais !== "" && paisRandom[getRandomInt(250)].capital}</p>
      </div>
    </div>
  );
}

export default App;

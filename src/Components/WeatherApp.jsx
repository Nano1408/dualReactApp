import React, {useState} from 'react'
import './weatherApp.css'
import styled from 'styled-components'
import DisplayNumber from './layout/DisplayNumber'
import WeatherForm from './layout/WeatherForm'


const Boton = styled.button`
    width: 100%;
    background-color: blue;
    color: white;
    margin-top: 1rem;
`

const Input = styled.input`
    border: solid gray 1px;
    backgraund-color: lightgrey;
    color: black;
`

const WeatherApp = () => {
    const [temperature, setTemperature] = useState(null)

    function queryTemperature(e){
        e.preventDefault()
        const city = e.target.city.value;
        const apiKey = 'bc53faa5060d584972f87db576cdc060'
        const units = '&units=metric'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`
        fetch(url)
        .then(response => response.json())
        .then(weather => setTemperature(weather.main.temp))
    }
    console.log(temperature)
  return (
    <div>
        <h2>WeatherApp</h2>
        <form onSubmit={queryTemperature}>
            <Input type="text" placeholder="Digite la ciudad" id="city"/>
            <Boton className='submit'>Enviar</Boton>
        </form>

        {/* operador ternario *********************/}
        {/* {temperature !==null
        ?<div><h2>{temperature}</h2></div>
        :null
        } */}

        {/* {operador de corto circuito} */}
        {temperature !== null && <div><h2>{temperature}</h2></div>}
    </div>
  )
}

export default WeatherApp
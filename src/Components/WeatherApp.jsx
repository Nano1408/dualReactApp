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
    const [datos, setDatos] = useState('')

    function queryDatos(e){
        e.preventDefault()
        const city = e.target.city.value;
        const apiKey = 'bc53faa5060d584972f87db576cdc060&units=metric'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=es`
        fetch(url)
        .then(response => response.json())
        .then(weather => setDatos({
            temperatura: weather.main.temp,
            humedad: weather.main.humidity,
            viento: weather.wind.speed,
            nombre: weather.name,
            icono: weather.weather[0].icon,
            descripcion: weather.weather[0].description, 
        }))
        console.log(url)
    }
  return (
    <div className="weather text-center">
        <h2 className="h2WeatherTittle">Weather App</h2>
        <form onSubmit={queryDatos}>
            <Input 
            type="text" 
            placeholder="Clima ciudad..." 
            id="city"/>
            <Boton className='submit'><i class='bx bx-search-alt-2' ></i></Boton>
        </form>

        {/* operador ternario *********************/}
        {/* {temperature !==null
        ?<div><h2>{temperature}</h2></div>
        :null
        } */}

        {/* {operador de corto circuito} */}
        {datos !== '' && <div><h2 className="nombre">{datos.nombre}</h2></div>}
        <div className='container--data'>
            <div className="data--clima">
                {datos !== '' && <div><h3 className="temperatura">{datos.temperatura}ºC</h3></div>}
                {datos !== '' && <div><h3 className="humedad">Humedad: {datos.humedad}%</h3></div>}
                {datos !== '' && <div><h3><i class='bx bx-wind bx-tada bx-rotate-90' ></i> {datos.viento} m/s</h3></div>}
            </div>
            <div className="IconDescription">
            {datos !== '' && <div className="descripcion"><h3>{datos.descripcion}</h3></div>}
            {datos !== '' && <img src={`http://openweathermap.org/img/wn/${datos.icono}@4x.png`}/>}
            </div>
        </div>
    </div>
  )
}

export default WeatherApp
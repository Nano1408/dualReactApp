import React from 'react'

const WeatherForm = () => {
  return (
    <form>
        <input type="text" placeholder="Digite la ciudad"/>
        <button className='submit'>Enviar</button>
    </form>
  )
}

export default WeatherForm
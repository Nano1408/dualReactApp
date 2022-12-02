import React, {useState} from 'react'
import './WeatherApp.css'
import Boton from './layout/Boton'
import DisplayNumber from './layout/DisplayNumber'


const CounterApp = () => {
    //const [state. setState] = useState(estadoInicial)
    const [display, setDisplay] = useState(0)
    function decrement(){
        setDisplay(display-1)
    }
    function reset(){
        setDisplay(0)
    }
    function increment(){
        setDisplay(display+1)
    }
  return (
    <div className="containerCounter">
        <h2 className="h2Counter">CounterApp</h2>
        <DisplayNumber>{display}</DisplayNumber>
        <div className="countButton text-center">
        <Boton funcion={decrement} className="buttonCounter"> <i class='bx bx-down-arrow' ></i> </Boton>
        <Boton funcion={reset} className="buttonCounter"><i class='bx bx-reset bx-spin bx-rotate-90' ></i></Boton>
        <Boton funcion={increment} className="buttonCounter"> <i class='bx bx-up-arrow' ></i> </Boton>
        </div>
    </div>
  )
}

export default CounterApp
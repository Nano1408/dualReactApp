import React, {useState} from 'react'
import Boton from './layout/Boton'
import DisplayNumber from './layout/DisplayNumber'

const CounterApp = () => {
    //const [state. setState] = useState(estadoInicial)
    const [display, setDisplay] = useState(0)
    function decrement(){
        setDisplay(display-1)
    }
    function reset(){
        setDisplay((0))
    }
    function increment(){
        setDisplay(display+1)
    }
  return (
    <div>
        <h2>CounterApp</h2>
        <DisplayNumber>{display}</DisplayNumber>
        <Boton funcion={decrement}> - </Boton>
        <Boton fucion={reset}>Reset</Boton>
        <Boton funcion={increment}> + </Boton>
    </div>
  )
}

export default CounterApp
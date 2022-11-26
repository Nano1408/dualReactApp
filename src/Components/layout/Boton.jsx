import React from 'react'

const Boton = ({children, funcion}) => {
  return (
    <button className="px-2
                       py-1
                     bg-lime-800 border 
                       text-white
                       rounded-lg"
     onClick={funcion}>{children}</button>
  )
}

export default Boton
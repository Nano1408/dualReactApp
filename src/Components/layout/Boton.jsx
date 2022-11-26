import React from 'react'

const Boton = ({children, funcion}) => {
  return (
    <button className="px-4
                       py-1
                     bg-lime-800 border 
                       text-white
                       rounded-lg
                       ml-1"
     onClick={funcion}>{children}</button>
  )
}

export default Boton
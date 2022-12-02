import React from 'react'

const Boton = ({children, funcion}) => {
  return (
    <button className="px-4
                       py-1
                      bg-amber-700 border-none 
                       text-white
                       rounded-lg
                       ml-2"
     onClick={funcion}>{children}</button>
  )
}

export default Boton
import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

function Button({inputValue}) {
  const {handlesearchCity}=useContext(Context)
  return (
    <button
    className="bg-slate-700 text-white p-2 rounded-md ml-3 text-xl  font-medium "
    onClick={() => handlesearchCity(inputValue.current.value)}
  >
    Search
  </button>
  )
}

export default Button

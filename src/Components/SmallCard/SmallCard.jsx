import React, { useContext } from 'react'
import './SmallCard.css'

function SmallCard({text,icon,data,parameter}) {
  return (
    <div className="card-div ">
    <span className="flex gap-1 items-center">
      {icon}{text}
    </span>
    <span>{data} {parameter}</span>
  </div>
  )
}

export default SmallCard

import React from 'react'
import Edit from '../assets/Edit.svg'
import './Fab.css'

function Fab() {
  return (
    <div className="fab">
      <img src={Edit} className="pencil" alt="Edit"></img>
    </div>
  )
}

export default Fab

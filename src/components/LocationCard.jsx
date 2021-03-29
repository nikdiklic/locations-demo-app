import React, { useState } from 'react'
import Fab from './Fab'
import './LocationCard.css'
import Users from '../assets/Users.svg'
import Timezone from '../assets/Timezone.svg'
import Views from '../assets/Views.svg'
import { useDispatch } from 'react-redux'
import { selectLocation } from '../store/actions/locations'

const LocationCard = ({ location: { id, name, userCount, time, views } }) => {
  const dispatch = useDispatch()

  const [hover, setHover] = useState(false)
  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => setHover(false)

  const handleClick = () => {
    dispatch(selectLocation(id))
  }
  return (
    <div
      className="location"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {hover && <Fab />}
      <div className="title">{name}</div>

      <div className="attribute users">
        <img className="icon" src={Users} alt="users" />
        {userCount} Users
      </div>

      <div className="attribute time">
        <img className="icon" src={Timezone} alt="timezone" />
        {time}
      </div>

      <div className="attribute views">
        <img className="icon" src={Views} alt="views" />
        {views} View{views !== 1 && 's'}
      </div>
    </div>
  )
}

export default LocationCard

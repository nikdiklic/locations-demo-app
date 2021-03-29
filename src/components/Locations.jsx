import React from 'react'
import { useSelector } from 'react-redux'
import './Locations.css'
import LocationCard from './LocationCard'

const Locations = () => {
  const locations = useSelector(state => state.locations.locations)
  const loading = useSelector(state => state.locations.loading)
  return (
    <div id="locations">
      {loading
        ? 'loading...'
        : locations.map(location => <LocationCard location={location} key={location.id} />)}
    </div>
  )
}

export default Locations

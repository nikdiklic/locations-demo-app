export const FETCH_LOCATIONS = 'FETCH_LOCATIONS'
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS'
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE'
export const SELECT_LOCATION = 'SELECT_LOCATION'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const fetchLocations = () => ({
  type: FETCH_LOCATIONS,
})
export const fetchLocationsSuccess = locations => ({
  type: FETCH_LOCATIONS_SUCCESS,
  locations,
})
export const fetchLocationsFailure = error => ({
  type: FETCH_LOCATIONS_FAILURE,
  error,
})
export const selectLocation = id => ({
  type: SELECT_LOCATION,
  id,
})
export const closeModal = () => ({
  type: CLOSE_MODAL,
})

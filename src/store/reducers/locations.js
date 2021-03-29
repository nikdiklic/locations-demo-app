import createReducer from '../createReducerHelper'
import {
  CLOSE_MODAL,
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  SELECT_LOCATION,
} from '../actions/locations'

const initialState = {
  locations: [],
  loading: true,
  error: null,
  current: null,
}

export default createReducer(initialState, {
  [FETCH_LOCATIONS]: state => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_LOCATIONS_SUCCESS]: (state, { locations }) => ({
    ...state,
    locations: locations,
    loading: false,
    error: null,
  }),
  [FETCH_LOCATIONS_FAILURE]: (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }),
  [SELECT_LOCATION]: (state, { id }) => {
    const locations = [...state.locations]
    const current = locations.find(l => l.id === id)
    current.views++
    return {
      ...state,
      locations,
      current,
    }
  },
  [CLOSE_MODAL]: state => ({
    ...state,
    current: null,
  }),
})

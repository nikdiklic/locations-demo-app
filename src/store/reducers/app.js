import createReducer from '../createReducerHelper'
import { APP_START, APP_START_FAILURE, APP_START_SUCCESS } from '../actions/app'

const initialState = {
  loading: true,
  error: null,
}

export default createReducer(initialState, {
  [APP_START]: () => ({
    loading: true,
    error: null,
  }),
  [APP_START_SUCCESS]: () => ({
    loading: false,
    error: null,
  }),
  [APP_START_FAILURE]: (_, { error }) => ({
    loading: false,
    error: error,
  }),
})

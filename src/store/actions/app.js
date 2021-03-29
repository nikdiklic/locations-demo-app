export const APP_START = 'APP_START'
export const APP_START_SUCCESS = 'APP_START_SUCCESS'
export const APP_START_FAILURE = 'APP_START_FAILURE'

export const appStart = () => ({
  type: APP_START,
})

export const appStartSuccess = () => ({
  type: APP_START_SUCCESS,
})

export const appStartFailure = error => ({
  type: APP_START_FAILURE,
  error,
})

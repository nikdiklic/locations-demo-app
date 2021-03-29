import dayjs from 'dayjs'
import { takeLatest, put, all } from 'redux-saga/effects'
import { FETCH_LOCATIONS, fetchLocationsSuccess, fetchLocationsFailure } from '../actions/locations'
import { get } from '../api'

function* fetchLocations() {
  try {
    const locations = (yield get('locations')).map(location => {
      const date = dayjs(location.createdAt)
      const time = date.format('hh:mma ([GMT]Z)')
      return { ...location, views: 0, time }
    })
    yield put(fetchLocationsSuccess(locations))
  } catch (error) {
    yield put(fetchLocationsFailure(error))
  }
}

export default function* appSaga() {
  yield all([takeLatest(FETCH_LOCATIONS, fetchLocations)])
}

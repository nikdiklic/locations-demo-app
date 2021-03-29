import { takeLatest, put, all } from 'redux-saga/effects'
import { appStartSuccess, APP_START } from '../actions/app'
import { fetchLocations } from '../actions/locations'

function* appStart() {
  yield put(fetchLocations())
  yield put(appStartSuccess())
}

export default function* appSaga() {
  yield all([takeLatest(APP_START, appStart)])
}

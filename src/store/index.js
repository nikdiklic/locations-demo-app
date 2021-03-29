import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import appReducer from './reducers/app'
import locationsReducer from './reducers/locations'
import appSaga from './saga/app'
import locationsSaga from './saga/locations'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  app: appReducer,
  locations: locationsReducer,
})

const middlewares = [sagaMiddleware]

middlewares.push(logger)

const composedEnhancers = compose(applyMiddleware(...middlewares))

export default createStore(rootReducer, {}, composedEnhancers)

sagaMiddleware.run(appSaga)
sagaMiddleware.run(locationsSaga)

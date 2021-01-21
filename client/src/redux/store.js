import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { rootSaga } from './root.sagas'


const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor }
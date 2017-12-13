import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}

/*
 import { createStore, applyMiddleware } from 'redux'
 import thunkMiddleware from 'redux-thunk'
 import { createLogger } from 'redux-logger'
 import rootReducer from './reducers'
 import { persistStore, persistCombineReducers } from 'redux-persist'
 import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

 const loggerMiddleware = createLogger()

 const config = {
 key: 'root',
 storage,
 }

 const reducer = persistCombineReducers(config, rootReducer)

 export default function configureStore(preloadedState) {
 let store = createStore(reducer,
 preloadedState,
 applyMiddleware(
 thunkMiddleware,
 loggerMiddleware
 ))
 let persistor = persistStore(store)
 return {persistor, store}
 }
 */
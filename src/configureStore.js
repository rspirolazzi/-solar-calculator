import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

const loggerMiddleware = createLogger()

const config = {
    key: 'root',
    storage,
}
const reducer = persistCombineReducers(config, rootReducer)
export default function configureStore(preloadedState) {
    let store = createStore(
        reducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
    let persistor = persistStore(store);
    return {store, persistor}
}
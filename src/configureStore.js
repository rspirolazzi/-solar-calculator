import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import {persistStore, autoRehydrate} from 'redux-persist'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    let store =createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        autoRehydrate
    )
    persistStore(store)
    return store
}
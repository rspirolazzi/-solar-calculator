import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
import reducers from './reducers' // where reducers is an object of reducers

const config = {
    key: 'root',
    storage,
}
//const reducer = persistCombineReducers(config, reducers)
export default function configureStore () {
    let store = createStore(reducers)
    let persistor = persistStore(store)

    return { persistor, store }
}
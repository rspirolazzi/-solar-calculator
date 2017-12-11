import { combineReducers } from 'redux'
import geographic from './geographic'
import consume from './consume'
import solarPanel from './solarPanel'
import battery from './battery'
import inverter from './inverter'
const rootReducer = combineReducers({
    geographic,
    consume,
    solarPanel,
    battery,
    inverter,
})
export default rootReducer
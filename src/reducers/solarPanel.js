import {ADD, REMOVE} from '../actions/solarPanel/types'
import {calculateWNominalFromSolarPanel} from '../utils/formulas'
const initSolarPanel = {
    power: 0,
    vol: 0,
    short_power: 0,
    nominal_power: 0,
    model: '',
    price: 0,
    qty: 1,
    subtotal: 0,
    temp: 25,
    w_nominal: 80,
    last_update: null
}
const initState = {
    items: [],
}
const solarPanel = (state = initState, {type, payload})=> {
    let newState={}, items=[], item={}
    switch (type) {
        case ADD:
            newState = Object.assign({}, state, {last_update: Date.now()})
            items = newState.items
            item = {...payload.item}
            item.id = payload.id
            item.w_nominal = calculateWNominalFromSolarPanel(item)
            items.push(item)
            newState.items = items
            return newState

        case REMOVE:
            newState = Object.assign({}, state, {last_update: Date.now()})
            items = newState.items.filter(item=>item.id !== payload.id)
            newState.items = items
            return newState
        default:
            return state
    }
}
export default solarPanel

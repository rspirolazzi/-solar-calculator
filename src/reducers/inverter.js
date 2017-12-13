import _ from 'lodash'
import {ADD, REMOVE, UPDATE_ATTRIBUTE} from '../actions/inverter/types'
const initState = {
    items: [],
    outputPower:0,
    inputVoltage:0,
    maxPower:0,
    model:'',
    price:0,
    qty:1,
}
const geographic = (state = initState, {type, payload})=> {
    let newState = {}
    switch (type) {
        case ADD:
            newState = _.assign({}, state)
            newState.items.push({...payload.item, id: payload.id})
            return newState
        case REMOVE:
            newState = _.assign({}, state)
            newState.items = newState.items.filter(item=>item.id !== payload.id)
            return newState
        case UPDATE_ATTRIBUTE:
            
            newState = _.merge({}, state, payload)
            return newState
        default:
            return state
    }
}
export default geographic

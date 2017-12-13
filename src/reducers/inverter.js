import _ from 'lodash'
import {ADD, REMOVE, UPDATE_ATTRIBUTE} from '../actions/inverter/types'
const initState = {
    isComplete:false,
    items: [],
    outputPower:0,
    inputVoltage:0,
    maxPower:0,
    model:'',
    price:0,
    qty:1,
}
const isComplete=(newState)=>{
    newState.isComplete = newState.items && newState.items.length>0
}
const geographic = (state = initState, {type, payload})=> {
    let newState = {}
    switch (type) {
        case ADD:
            newState = _.assign({}, state)
            newState.items.push({...payload.item, id: payload.id})
            isComplete(newState)
            return newState
        case REMOVE:
            newState = _.assign({}, state)
            newState.items = newState.items.filter(item=>item.id !== payload.id)
            isComplete(newState)
            return newState
        case UPDATE_ATTRIBUTE:
            newState = _.merge({}, state, payload)
            isComplete(newState)
            return newState
        default:
            return state
    }
}
export default geographic

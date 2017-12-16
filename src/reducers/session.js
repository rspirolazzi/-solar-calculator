import {HIDE_MESSAGE, SHOW_MESSAGE} from '../actions/session/types'
import _ from 'lodash'
const initState = {
    message:'',
}
const battery = (state = initState, {type, payload})=> {
    let newState
    switch (type) {
        case SHOW_MESSAGE:
            newState = _.assign({}, state, payload)
            return newState
        case HIDE_MESSAGE:
            newState = _.assign({}, state, {message:''})
            return newState
        default:
            return state
    }
}
export default battery

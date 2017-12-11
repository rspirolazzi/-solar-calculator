import {SELECTED} from '../actions/geographic/types'
const initSelectedParam = {
    angle:0,
    jan:0,
    feb:0,
    mar:0,
    apr:0,
    may:0,
    jun:0,
    jul:0,
    aug:0,
    sept:0,
    oct:0,
    nov:0,
    dec:0,
    avg:0,
}
const initState = {
    parameters: [],
    selected: {},
    selectedIndex:null
}
const geographic = (state = initState, {type, payload})=> {
    switch (type) {
        case SELECTED:
            const selected = state.parameters[payload.index]
            return Object.assign(initState, state, {
                selected: selected,
                selectedIndex: payload.index
            })
        default:
            return state
    }
}
export default geographic

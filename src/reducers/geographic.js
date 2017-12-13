import {SELECTED_PARAMETER, LOADING_LOCATION, FOUND_LOCATION, SELECTED_LOCATION, LOADING_PARAMETER, FOUND_PARAMETER} from '../actions/geographic/types'
import _ from 'lodash'
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
    parameter:{
        result: [],
        selected: {},
        selectedIndex:null,
        isLoading:false,
    },
    isComplete:false,
    location:{
        selectedIndex:null,
        latitude:null,
        longitude:null,
        formattedAddress:'',
        result:[],
        isLoading:false,
    }
}
const geographic = (state = initState, {type, payload})=> {
    switch (type) {
        case SELECTED_PARAMETER:
            const selected = state.parameter.result[payload.index]
            return _.merge({}, initState, state, {isComplete:true,parameter:{selected: selected,selectedIndex: payload.index}})
        case LOADING_PARAMETER:
            return _.assign({}, initState, state, {parameter:{isLoading:payload.isLoading}})
        case FOUND_PARAMETER:
            return _.assign({}, initState, state, {parameter:payload})

        case LOADING_LOCATION:
            return _.assign({}, initState, state, {location:{result:[], latitude:null,longitude:null,isLoading:payload.isLoading}})
        case FOUND_LOCATION:
            return _.assign({}, initState, state, {location:payload})
        case SELECTED_LOCATION:
            return _.merge({}, initState, state, {location:payload})
        default:
            return state
    }
}
export default geographic

import {generateId} from '../../utils/actions'
import {ADD, REMOVE, UPDATE_ATTRIBUTE} from './types'

export const addInverterParam = (item)=>(dispatch, getState)=>dispatch(_addInverterParam(item))
export const updateAttribute = (key, value)=>(dispatch, getState)=>dispatch(_updateAttribute(key, value))
export const removeInverterParam = (id)=>(dispatch, getState)=>dispatch(_removeInverterParam(id))

const _addInverterParam = (item)=> ({
    type: ADD,
    payload: {
        id: generateId(),
        item
    }
})
const _updateAttribute = (key, value)=> ({
    type: UPDATE_ATTRIBUTE,
    payload: {
        [key]: value
    }
})
const _removeInverterParam = (id)=>({
    type: REMOVE,
    payload: {
        id
    }
})
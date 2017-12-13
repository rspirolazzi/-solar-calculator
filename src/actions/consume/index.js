import {generateId} from '../../utils/actions'
import {ADD, REMOVE, UPDATE_ATTRIBUTE} from './types'

export const addConsumeParam = (item)=>(dispatch, getState)=>dispatch(_addConsumeParam(item))
export const updateAttribute = (key, value)=>(dispatch, getState)=>dispatch(_updateAttribute(key, value))
export const removeConsumeParam = (id)=>(dispatch, getState)=>dispatch(_removeConsumeParam(id))

const _addConsumeParam = (item)=> ({
    type: ADD,
    payload: {
        id: generateId(),
        item
    }
})
const _updateAttribute = (key, value)=> ({
    type: UPDATE_ATTRIBUTE,
    payload: {
        [key]: parseInt(value, 0)
    }
})
const _removeConsumeParam = (id)=>({
    type: REMOVE,
    payload: {
        id
    }
})
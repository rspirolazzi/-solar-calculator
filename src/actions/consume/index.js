import {generateId} from '../../utils/actions'
import {ADD, REMOVE, UPDATE_ATTRIBUTE} from './types'
import _ from 'lodash'

export const addConsumeParam = (item)=>(dispatch, getState)=>dispatch(_addConsumeParam(item))
export const updateAttribute = (key, value, optional=null)=>(dispatch, getState)=>dispatch(_updateAttribute(key, value, optional))
export const removeConsumeParam = (id)=>(dispatch, getState)=>dispatch(_removeConsumeParam(id))

const _addConsumeParam = (item)=> ({
    type: ADD,
    payload: {
        id: generateId(),
        item
    }
})
const _updateAttribute = (key, value, optional=null)=> {
    let payload = {}
    if (optional) {
        payload={[optional]:{[key]:value}}
    }else{
        payload={[key]:value}
    }
    return {type: UPDATE_ATTRIBUTE,payload}
}
const _removeConsumeParam = (id)=>({
    type: REMOVE,
    payload: {
        id
    }
})
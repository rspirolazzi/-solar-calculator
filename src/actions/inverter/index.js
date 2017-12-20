import {generateId} from '../../utils/actions'
import {ADD, REMOVE, UPDATE_ATTRIBUTE} from './types'
import {showMessage} from '../session'

export const addInverterParam = (item)=>(dispatch, getState)=>{
    dispatch(showMessage(`Se agrego ${item.name}`))
    dispatch(_addInverterParam(item))
}
export const updateAttribute = (key, value)=>(dispatch, getState)=>dispatch(_updateAttribute(key, value))
export const removeInverterParam = (id)=>(dispatch, getState)=>{
    dispatch(_removeInverterParam(id))
    dispatch(showMessage('Se elimino un regulador de carga'))
}

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
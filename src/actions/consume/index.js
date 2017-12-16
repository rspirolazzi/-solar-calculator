import {generateId} from '../../utils/actions'
import {ADD, REMOVE, UPDATE_ATTRIBUTE} from './types'
import {showMessage} from '../session'
/**
 * Agrega un item de consumo al state consume
 * @param item
 */
export const addConsumeParam = (item)=>(dispatch, getState)=>{
    dispatch(_addConsumeParam(item))
    dispatch(showMessage('Se agrego un consumo'))
}
/**
 * Actualiza un item de consumo en el state consume
 * @param key
 * @param value
 * @param optional
 */
export const updateAttribute = (key, value, optional=null)=>(dispatch, getState)=>dispatch(_updateAttribute(key, value, optional))
/**
 * Elimina un consumo del state consume
 * @param id
 */
export const removeConsumeParam = (id)=>(dispatch, getState)=>{
    dispatch(_removeConsumeParam(id))
    dispatch(showMessage('Se elimino un consumo'))
}
/**
 * 
 * @param item
 * @private
 */
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
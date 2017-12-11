import {generateId} from '../../utils/actions'
import {ADD, REMOVE} from './types'

export const addPanelParam=(item)=>(dispatch, getState)=>dispatch(_addPanelParam(item))
export const removePanelParam=(id)=>(dispatch, getState)=>dispatch(_removePanelParam(id))

const _addPanelParam = (item) =>({
    type: ADD,
    payload: {
        id: generateId(),
        item
    }
})

const _removePanelParam = (id) =>({
    type: REMOVE,
    payload: {
        id
    }
})
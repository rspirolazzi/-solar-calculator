import {generateId} from '../../utils/actions'
import {ADD, REMOVE} from './types'
import {showMessage} from '../session'

export const addPanelParam=(item)=>(dispatch, getState)=>{
    dispatch(_addPanelParam(item))
    dispatch(showMessage(`Se agrego ${item.name}`))
}
export const removePanelParam=(id)=>(dispatch, getState)=>{
    dispatch(_removePanelParam(id))
    dispatch(showMessage('Se elimino un panel solar'))
}

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
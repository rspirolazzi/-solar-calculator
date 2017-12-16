import {SHOW_MESSAGE, HIDE_MESSAGE} from './types'

export const showMessage = (message)=> (dispatch, getState)=>{
    dispatch(_showMessage(message))
}
const _showMessage = message=> ({
    type: SHOW_MESSAGE,
    payload: {message}
})
export const hideMessage = ()=> (dispatch, getState)=>{
    dispatch(_hideMessage())
}
const _hideMessage = ()=> ({
    type: HIDE_MESSAGE,
    payload: {}
})
import {SELECTED} from './types'
export const selectGeoParameter = (index)=>(dispatch, getState)=>dispatch(_selectGeoParameter(index))
const _selectGeoParameter = (index)=>({
    type: SELECTED,
    payload: {
        index
    }
})
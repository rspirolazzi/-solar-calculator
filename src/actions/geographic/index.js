import {SELECTED_PARAMETER, LOADING_LOCATION, FOUND_LOCATION, SELECTED_LOCATION, LOADING_PARAMETER, FOUND_PARAMETER} from './types'
import geocoderService from '../../services/Geocoder'
import nasaService from '../../services/Nasa'

export const selectGeoParameter = (index)=>(dispatch, getState)=>dispatch(_selectGeoParameter(index))
const _selectGeoParameter = (index)=>({
    type: SELECTED_PARAMETER,
    payload: {
        index
    }
})

export const findLocation = (term)=>(dispatch, getState)=>{
    dispatch(loading(LOADING_LOCATION, true))
    geocoderService.find(term).then(res=>{
        dispatch(loading(LOADING_LOCATION, false))
        dispatch(response(FOUND_LOCATION, res))
    }).catch(err=>dispatch(loading(LOADING_LOCATION, false)))
}
const loading = (type, isLoading)=>({
    type,
    payload: {
        isLoading
    }
})
const response = (type,result)=>({
    type,
    payload: {result}
})
/**
 * Selecciona la region para obtener la radiación del Sol
 * @param latitude
 * @param longitude
 * @param selectedIndex
 */
export const selectLocation = ({latitude, longitude}, selectedIndex)=>(dispatch, getState)=>{
    dispatch(_selectLocation(latitude, longitude, selectedIndex))
    dispatch(loading(LOADING_PARAMETER, true))
    nasaService.find(latitude, longitude).then(res=>{
        dispatch(loading(LOADING_PARAMETER, false))
        dispatch(response(FOUND_PARAMETER, res))
    }).catch(err=>dispatch(loading(LOADING_PARAMETER, false)))

}
const _selectLocation = (latitude, longitude, selectedIndex)=>({
    type: SELECTED_LOCATION,
    payload: {latitude, longitude, selectedIndex}
})
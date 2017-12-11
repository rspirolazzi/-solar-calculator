import {SELECTED, UPDATE_ATTR,UPDATE_ATTR_BATTERY} from './types'

export const selectVoltage = (voltage)=> (dispatch, getState)=>{
    const solarPanels = getState().solarPanel.items
    dispatch(_selectVoltage(voltage, solarPanels))
}
const _selectVoltage = (voltage, solarPanels = [])=> ({
        type: SELECTED,
        payload: {
            voltage, solarPanels
        }
    })
export const updateAttr = (key, value)=> (dispatch, getState)=>{
    const totalConsumeOfYear = getState().consume.totals.ofYear
    dispatch(_updateAttr(totalConsumeOfYear, key, value))
}
const _updateAttr = (totalConsumeOfYear, key, value)=> ({
        type: UPDATE_ATTR,
        payload: {
            totalConsumeOfYear,
            [key]: value
        }
    })

export const updateAttrBattery = (key, value)=>(dispatch, getState)=>{
    const solarPanels = getState().solarPanel.items
    const {totals:{power_total}, power_factor} = getState().consume
    
    dispatch(_updateAttrBattery(solarPanels, power_total, power_factor, key, value))
}
 const _updateAttrBattery = (solarPanels = [], power_total, power_factor,key, value)=> ({
        type: UPDATE_ATTR_BATTERY,
        payload: {
            solarPanels,
            power_total,
            power_factor,
            [key]: value,
        }
    })
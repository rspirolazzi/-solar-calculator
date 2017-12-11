import {SELECTED, UPDATE_ATTR, UPDATE_ATTR_BATTERY} from '../actions/battery/types'
import _ from 'lodash'
import {qtyPanelsInParallel, qtyPanelsInSeries, bankOfBatteryCapacity, qtyOfBatteries,capacityOfBatteries, pricesOfBatteries,qtyBatteriesInSeries, qtyBatteriesInParallel,
    getMaxPowerOfChargeBankBatteries, getMaxPowerOfUnchargeBankBatteries} from '../utils/formulas'
const initBattery={
    capacity:220,//Ah
    voltage:12,//V
    model:'Moura CLEAN 12MF220',
    price:550.85,//USD
}
const initState = {
    items: [initBattery],
    voltage: '',
    series:0,
    parallel:0,
    daysOfAutonomy:3,
    deepMaxUncharge:80,
    unchargeEfficient:90,
    inverterEfficient:84,
    totalBankBattery:0,
    totalOfBattery:{
        qty:0,
        capacity:0,//Ah
        totalPrice:0,//USD
        qtyInSeries:0,
        qtyInParallel:0,
        maxPowerOfChargeBankBatteries:0,
        maxPowerOfUnchargeBankBatteries:0,
        
    }
}
const calculateTotalOfBattery= (newState, {solarPanels, power_total, power_factor})=>{
    let qty = qtyOfBatteries(newState.totalBankBattery, newState.voltage, newState.items[0].capacity, newState.items[0].voltage)
    let totalPrice= pricesOfBatteries(newState.items[0].price, qty)
    let qtyInSeries = qtyBatteriesInSeries(newState.voltage,newState.items)
    let qtyInParallel = qtyBatteriesInParallel(qty,qtyInSeries)
    let capacity = capacityOfBatteries(newState.items[0].capacity,qtyInParallel)
    
    let maxPowerOfChargeBankBatteries = getMaxPowerOfChargeBankBatteries(newState.parallel, solarPanels)
    
    let maxPowerOfUnchargeBankBatteries = getMaxPowerOfUnchargeBankBatteries(power_total, power_factor, newState.voltage,newState.inverterEfficient )
    
    return {qty,capacity,totalPrice, qtyInSeries, qtyInParallel, maxPowerOfChargeBankBatteries, maxPowerOfUnchargeBankBatteries}
}
const battery = (state = initState, {type, payload})=> {
    let newState
    switch (type) {
        case SELECTED:
            newState = _.assign({}, state, {voltage: payload.voltage})
            newState.series =  qtyPanelsInSeries(payload.solarPanels, newState.voltage)
            newState.parallel =  qtyPanelsInParallel(payload.solarPanels, newState.series)
            //newState.totalBankBattery = bankOfBatteryCapacity(newState)
            return newState
        case UPDATE_ATTR:
            newState = _.assign({}, state, payload)
            newState.totalBankBattery = bankOfBatteryCapacity(payload.totalConsumeOfYear, newState)
            return newState
        case UPDATE_ATTR_BATTERY:
            newState = _.assign({}, state, payload)
            _.assign(newState.items[0], payload)
            //qtyOfBatteries
            
            newState.totalOfBattery=calculateTotalOfBattery(newState, payload)
            return newState
        default:
            return state
    }
}
export default battery

import {ADD, REMOVE, UPDATE_ATTRIBUTE} from '../actions/consume/types'
import {
    calculateConsumeTotalByPower,
    calculateConsumeTotalByPowerPico,
    calculateConsumeTotalByWinter,
    calculateConsumeTotalBySummer,
} from '../utils/actions'
import _ from 'lodash'
const initConsume = {
    name: '',
    qty: 1,
    watt: '',
    winterHs: '',
    summerHs: '',
    totalWt: 0,
    totalWpt: 0,
    totalWinterWhDay: 0,
    totalSummerWhDay: 0,
}
const initState = {
    items: [],
    totals: {
        power: 0,
        power_p: 0,
        winter: 0,
        summer: 0,
        ofYear: 0,
        power_total:0,
        power_p_total:0,
    },
    power_factor: 0.7,
    energy: {
        security_factor: 110,
        system_efficiency: 60,
        cloudy_days: 3,
        cloudy_frequent: 15,
        power_to_generate: 0.00,
        extra_power_to_generate: 0.00,
        total_extra_power_to_generate: 0.00,
    }
}
const calculateTotals = (newState)=> {
    var power_total = calculateConsumeTotalByPower(newState.items)
    var power_p_total = calculateConsumeTotalByPowerPico(newState.items)
    var winter = calculateConsumeTotalByWinter(newState.items)
    var summer = calculateConsumeTotalBySummer(newState.items)
    var ofYear = Math.max(winter, summer)
    newState.totals = {power_total, power_p_total, winter, summer, ofYear}
}
const calculateEnergy = (newState)=> {
    const {security_factor, system_efficiency, cloudy_days, cloudy_frequent} = newState.energy
    let power_to_generate = (newState.totals.ofYear * security_factor) / system_efficiency
    power_to_generate = parseFloat(isNaN(power_to_generate) ? 0 : power_to_generate).toFixed(2)

    let extra_power_to_generate = (power_to_generate * (cloudy_days / cloudy_frequent))
    extra_power_to_generate = parseFloat(isNaN(extra_power_to_generate) ? 0 : extra_power_to_generate).toFixed(2)

    let total_extra_power_to_generate = parseFloat(parseFloat(power_to_generate) + parseFloat(extra_power_to_generate)).toFixed(2)

    newState.energy = _.assign({}, newState.energy, {
        power_to_generate,
        extra_power_to_generate,
        total_extra_power_to_generate
    })
}
const geographic = (state = initState, {type, payload})=> {
    let newState = {}
    switch (type) {
        case ADD:
            newState = _.assign({}, state)
            newState.items.push({...payload.item, id: payload.id})
            calculateTotals(newState)
            calculateEnergy(newState)
            return newState
        case REMOVE:
            newState = _.assign({}, state)
            newState.items = newState.items.filter(item=>item.id !== payload.id)
            calculateTotals(newState)
            calculateEnergy(newState)
            return newState
        case UPDATE_ATTRIBUTE:
            newState = _.merge({}, state, {energy: payload})
            calculateEnergy(newState)
            return newState
        default:
            return state
    }
}
export default geographic

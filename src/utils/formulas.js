import _ from 'lodash'
import {totalPowerSolarPanel, reduceAddToNumber, configVoltageTable} from './collection'

/*
 Corriente máxima de carga
 */
const MAX_POWER_OF_CHARGE = 1.25
export const MAX_POWER_OF_UNCHARGE_BANK_BATTERIES_C5 = 5
export const MAX_POWER_OF_UNCHARGE_BANK_BATTERIES_C20 = 20
const POWER_PICO_OUTPUT_CA=220

export const calculateWNominalFromSolarPanel = (solarPanel)=> {
    let power = _.toNumber(_.get(solarPanel, 'power', 0))
    let temp = _.toNumber(_.get(solarPanel, 'temp', 0))
    let result = power * (1 - (Math.abs(25 - temp) * 0.8 / 100))
    return result
}
/**
 * Sugiere el "Voltaje seleccionado para banco de baterías"
 * @param solarPanels
 */
export const suggestVoltage = (solarPanels)=> {
    let total = totalPowerSolarPanel(solarPanels)
    let suggest = _.orderBy(configVoltageTable, 'max').find((e)=>(e.max >= total))
    let result = 0
    if (suggest) {
        result = suggest.v
    }
    return result
}
/**
 * Cantidad de paneles en series
 * @param items
 * @param voltage
 * @returns {number}
 */
export const qtyPanelsInSeries = (items, voltage)=> {
    let result = 0
    if (_.isNumber(voltage) && items.length > 0) {
        //TODO que pasa cuando hay mas de un panel de diferentes voltage?
        //TODO por ahora agarro el mas alto
        const panel = _.sortBy(items, ['vol']);
        let panelVoltage = panel.shift().vol
        result = (_.toNumber(voltage) / _.toNumber(panelVoltage)).toFixed(2)
    }
    return result
}
/**
 * Cantidad de paneles en paralelo
 * @param items paneles solares
 * @param series
 * @returns {number}
 */
export const qtyPanelsInParallel = (items=[], series)=> {
    let result = 0, qty = reduceAddToNumber(items, 'qty')
    if (_.isNumber(qty) && _.isNumber(series)) {
        result = (_.toNumber(qty) / _.toNumber(series)).toFixed(2)
    }
    return result
}
/**
 * Capacidad del banco
 * @param totalConsumeOfYear
 * @param voltage
 * @param daysOfAutonomy
 * @param deepMaxUnCharge
 * @param UnChargeEfficient
 * @param inverterEfficient
 * @returns {number}
 */
export const bankOfBatteryCapacity = (totalConsumeOfYear, {voltage, daysOfAutonomy, deepMaxUnCharge, UnChargeEfficient, inverterEfficient})=> {
    let result = 0
    if(_.toNumber(voltage) && _.toNumber(daysOfAutonomy) && _.toNumber(deepMaxUnCharge) && _.toNumber(UnChargeEfficient) && _.toNumber(inverterEfficient)){
        result = ((((_.toNumber(totalConsumeOfYear) * (_.toNumber(daysOfAutonomy) + 1))) / ((_.toNumber(voltage/100) * _.toNumber(deepMaxUnCharge/100) * _.toNumber(UnChargeEfficient/100) * _.toNumber(inverterEfficient/100))))/100).toFixed(2)
    }
    return result
}
/**
 * Cantidad de baterías - Cantidad Total
 * @param totalBankBattery
 * @param voltage
 * @param batteryCapacity
 * @param batteryVoltage
 * @returns {number}
 */
export const qtyOfBatteries=(totalBankBattery, voltage, batteryCapacity, batteryVoltage)=>{
    let result = 0
    if(_.toNumber(totalBankBattery) && _.toNumber(voltage) && _.toNumber(batteryCapacity) && _.toNumber(batteryVoltage)){
        result = ((_.toNumber(totalBankBattery) * _.toNumber(voltage))/(_.toNumber(batteryCapacity) * _.toNumber(batteryVoltage))).toFixed(2)
    }
    return result
}
export const capacityOfBatteries=(batteryCapacity,qtyInParallel )=>{
    let result = 0
    if(_.toNumber(batteryCapacity) && _.toNumber(qtyInParallel)){
        result = (_.toNumber(batteryCapacity) * _.toNumber(qtyInParallel)).toFixed(2)
    }
    return result
}
/**
 * Cantidad de baterías - Costo de Inversión
 * @param price
 * @param qty
 * @returns {number}
 */
export const pricesOfBatteries=(price, qty)=>{
    let result = 0
    if(_.toNumber(price) && _.toNumber(qty)){
        result = ((_.toNumber(qty) * _.toNumber(price))).toFixed(2)
    }
    return result
}
/**
 * Disposición de las Baterías - Cantidad de baterias en serie
 * @param voltage
 * @param items
 * @returns {number}
 */
export const qtyBatteriesInSeries = (voltage, items)=> {
    let result = 0
    if (_.toNumber(voltage) && items.length > 0) {
        //TODO que pasa cuando hay mas de una bateria con diferente voltage?
        //TODO por ahora agarro el mas alto
        const battery = _.sortBy(items, ['voltage']);
        let batteryVoltage = battery.shift().voltage
        result = (_.toNumber(voltage) / _.toNumber(batteryVoltage)).toFixed(2)
    }
    return result
}
export const qtyBatteriesInParallel = (qtyOfBatteries, series)=> {
    let result = 0
    if (_.toNumber(qtyOfBatteries) && _.toNumber(series)) {
        result = (_.toNumber(qtyOfBatteries) / _.toNumber(series)).toFixed(2)
    }
    return result
}
/**
 * Corrientes del banco - Corriente máxima de carga
 * @param qtySolarPanelsInParallel
 * @param items
 * @returns {number}
 */
export const getMaxPowerOfChargeBankBatteries=(qtySolarPanelsInParallel, items)=>{
    let result = 0
    if (_.toNumber(qtySolarPanelsInParallel) && items.length > 0) {
        //TODO que pasa cuando hay mas de un panel solar con diferente nominal_power?
        //TODO por ahora agarro el mas alto
        const solarPanel = _.sortBy(items, ['nominal_power']);
        let nominal_power = solarPanel.shift().nominal_power
        result = (MAX_POWER_OF_CHARGE*qtySolarPanelsInParallel*nominal_power).toFixed(2)
    }
    return result
}
/**
 * Corrientes del banco - Corriente máxima de descarga
 * @param power_total
 * @param power_factor
 * @param batteryVoltage
 * @param inverterEfficient
 * @returns {number}
 */
export const getMaxPowerOfUnChargeBankBatteries=(power_total, power_factor, batteryVoltage, inverterEfficient )=>{
    
    let result = 0
    if (_.toNumber(power_total) && _.toNumber(power_factor) && _.toNumber(batteryVoltage) && _.toNumber(inverterEfficient)) {
        result = ((power_total/power_factor)/(batteryVoltage*(inverterEfficient/100))).toFixed(2)
    }
    return result
}
/**
 * Corrientes del banco - C20 (máxima corriente de carga)
 * @param qtySolarPanelsInParallel
 * @param batteryCapacity
 * @returns {number}
 */
export const getMaxPowerOfChargeBankBatteriesC20=(qtySolarPanelsInParallel, batteryCapacity)=>{
    let result = 0
    if (_.toNumber(batteryCapacity) && _.toNumber(qtySolarPanelsInParallel)) {
        result = ((_.toNumber(batteryCapacity)/MAX_POWER_OF_UNCHARGE_BANK_BATTERIES_C20)*_.toNumber(qtySolarPanelsInParallel)).toFixed(2)
    }
    return result
}


/**
 * Corrientes del banco - C5,C20 (máxima corriente de descarga)
 * @param qtySolarPanelsInParallel
 * @param batteryCapacity
 */
export const getMaxPowerOfUnChargeBankBatteriesC5=(qtySolarPanelsInParallel, batteryCapacity)=>{
    let result = 0
    if (_.toNumber(batteryCapacity) && _.toNumber(qtySolarPanelsInParallel)) {
        result = ((_.toNumber(batteryCapacity)/MAX_POWER_OF_UNCHARGE_BANK_BATTERIES_C5)*_.toNumber(qtySolarPanelsInParallel)).toFixed(2)
    }
    return result
}
/**
 * Corrientes del banco - C5,C20 (máxima corriente de descarga)
 * @param qtySolarPanelsInParallel
 * @param batteryCapacity
 */
export const getMaxPowerOfUnChargeBankBatteriesByVar=(qtySolarPanelsInParallel, batteryCapacity, variable)=>{
    let result = 0
    if (_.toNumber(batteryCapacity) && _.toNumber(qtySolarPanelsInParallel)) {
        result = ((_.toNumber(batteryCapacity)/variable)*_.toNumber(qtySolarPanelsInParallel)).toFixed(2)
    }
    return result
}
/**
 * Regulador de carga - Corriente del regulador
 * @param qtySolarPanelsInParallel
 * @param items
 * @returns {number}
 */
export const getPowerOfChargeControllerPanel=(qtySolarPanelsInParallel, items)=>{
    let result = 0
    if (_.toNumber(qtySolarPanelsInParallel) && items.length > 0) {
        //TODO que pasa cuando hay mas de un panel solar con diferente nominal_power?
        //TODO por ahora agarro el mas alto
        const solarPanel = _.sortBy(items, ['short_power']);
        let short_power = solarPanel.shift().short_power
        result = (MAX_POWER_OF_CHARGE*qtySolarPanelsInParallel*short_power).toFixed(2)
    }
    return result
}
/**
 * Inversor de corriente - Potencia requerida en CA
 * @param power_total
 * @param power_factor
 * @returns {number}
 */
export const getPowerRequiredInCA=(power_total, power_factor)=>{
    let result = 0
    if (_.toNumber(power_total) && _.toNumber(power_factor)) {
        result = ((_.toNumber(power_total)*MAX_POWER_OF_CHARGE)/_.toNumber(power_factor)).toFixed(2)
    }
    return result
}
/**
 * Inversor de corriente - Corriente pico de salida en CA
 * @param power_p_total
 * @param power_factor
 * @returns {number}
 */
export const getPowerPicoOutputCA=(power_p_total, power_factor)=>{
    let result = 0
    if (_.toNumber(power_p_total) && _.toNumber(power_factor)) {
        result = (_.toNumber(power_p_total)/(POWER_PICO_OUTPUT_CA*_.toNumber(power_factor))).toFixed(2)
    }
    return result
}
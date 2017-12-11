import _ from 'lodash'
import {totalPowerSolarPanel, reduceAddToNumber, configVoltageTable} from './collection'

/*
 Corriente máxima de carga
 */
const MAX_POWER_OF_CHARGE = 1.25

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
        result = Math.round(_.toNumber(voltage) / _.toNumber(panelVoltage))
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
        result = Math.round(_.toNumber(qty) / _.toNumber(series))
    }
    return result
}
/**
 * Capacidad del banco
 * @param totalConsumeOfYear
 * @param voltage
 * @param daysOfAutonomy
 * @param deepMaxUncharge
 * @param unchargeEfficient
 * @param inverterEfficient
 * @returns {number}
 */
export const bankOfBatteryCapacity = (totalConsumeOfYear, {voltage, daysOfAutonomy, deepMaxUncharge, unchargeEfficient, inverterEfficient})=> {
    let result = 0
    if(_.toNumber(voltage) && _.toNumber(daysOfAutonomy) && _.toNumber(deepMaxUncharge) && _.toNumber(unchargeEfficient) && _.toNumber(inverterEfficient)){
        result = ((((_.toNumber(totalConsumeOfYear) * (_.toNumber(daysOfAutonomy) + 1))) / ((_.toNumber(voltage/100) * _.toNumber(deepMaxUncharge/100) * _.toNumber(unchargeEfficient/100) * _.toNumber(inverterEfficient/100))))/100).toFixed(2)
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
        result = Math.round((_.toNumber(totalBankBattery) * _.toNumber(voltage))/(_.toNumber(batteryCapacity) * _.toNumber(batteryVoltage)))
    }
    return result
}
export const capacityOfBatteries=(batteryCapacity,qtyInParallel )=>{
    let result = 0
    if(_.toNumber(batteryCapacity) && _.toNumber(qtyInParallel)){
        result = Math.round(_.toNumber(batteryCapacity) * _.toNumber(qtyInParallel))
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
        result = Math.round(_.toNumber(voltage) / _.toNumber(batteryVoltage))
    }
    return result
}
export const qtyBatteriesInParallel = (qtyOfBatteries, series)=> {
    let result = 0
    if (_.toNumber(qtyOfBatteries) && _.toNumber(series)) {
        result = Math.round(_.toNumber(qtyOfBatteries) / _.toNumber(series))
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
        result = Math.round(MAX_POWER_OF_CHARGE*qtySolarPanelsInParallel*nominal_power)
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
export const getMaxPowerOfUnchargeBankBatteries=(power_total, power_factor, batteryVoltage, inverterEfficient )=>{
    
    let result = 0
    if (_.toNumber(power_total) && _.toNumber(power_factor) && _.toNumber(batteryVoltage) && _.toNumber(inverterEfficient)) {
        result = Math.round((power_total/power_factor)/(batteryVoltage*(inverterEfficient/100)))
    }
    return result
}

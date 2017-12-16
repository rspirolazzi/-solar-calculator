import _ from 'lodash'
export const generateId = ()=> {
    return _.uniqueId()
}

export const calculateConsumeTotalByKey = (items, key)=> items.reduce((var1, var2)=>({[key]:_.toNumber(var1[key])+_.toNumber(var2[key])}), {[key]:0})[key]
export const calculateConsumeTotalByPower = (items)=> calculateConsumeTotalByKey(items, 'totalWt')
export const calculateConsumeTotalByPowerPico = (items)=> calculateConsumeTotalByKey(items, 'totalWpt')
export const calculateConsumeTotalByWinter = (items)=> calculateConsumeTotalByKey(items, 'totalWinterWhDay')
export const calculateConsumeTotalBySummer= (items)=> calculateConsumeTotalByKey(items, 'totalSummerWhDay')
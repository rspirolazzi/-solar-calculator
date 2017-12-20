import _ from 'lodash'
export const transformArrayToArrayKeys=(values)=>values.map(value=>({label:Object.values(value).shift(),key:Object.keys(value).shift()}))
//export const parametersWithHeaders=(parameters, headers)=>parameters.map(param=>({label:Object.values(value).shift(),key:Object.keys(value).shift()}))

export const configVoltageTable = [
    {key:1,label: '1000 W', w: 1000, v: 12,max:1000},
    {key:2,label: '5000 W', w: 5000, v: 24, max:5000},
    {key:3,label: '> 5000 W', w: 5001, v: 48, max:Number.MAX_SAFE_INTEGER},
]

/**
 * Suma
 * @param items
 * @param key
 * @param init
 * @returns {number}
 */
export const reduceAddToNumber=(items, key, init=0)=> {
    let total = init
    if(items.length>0){
        const result = reduceAddByKey(items, key, init)
        total = result[key]
    }
    return total
}
const reduceAddByKey=(items, key, init=0)=> {
    let total = {[key]:init}
    if(items.length>0){
        total = items.reduce((var1, var2)=>({[key]:parseFloat(var1[key]) + parseFloat(var2[key])}), {[key]:init})
    }
    return total
}

export const avgToNumber=(items, key, init=0)=> {
    /**/
    let total = _(items).filter(key).reduce(function(a,m,i,p) {
        return Math.round((a + parseFloat(m[key]))/p.length, 2)
    },init)
    /**/
    return total
}
/**
 * Calcula el "Potencia total del sistema fotovoltaico" en base a los paneles solares
 * @param items Paneles Solares
 * @returns {number}
 */
export const totalPowerSolarPanel=(items)=>{
    const power = _.toNumber(avgToNumber(items, 'w_nominal'))
    const qty = _.toNumber(reduceAddToNumber(items, 'qty'))
    return qty*power
}

export const getTotalOfCost=({inverter, solarPanel, battery})=>{
    let total = 0
    total += reduceAddToNumber(solarPanel.items, 'subtotal')
    total += battery.totalOfBattery.qty * reduceAddToNumber(battery.items, 'price')
    total += reduceAddToNumber(inverter.items, 'subtotal')
    total += _.toNumber(inverter.price)
    return total
}
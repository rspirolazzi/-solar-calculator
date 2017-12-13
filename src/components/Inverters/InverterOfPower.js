import React from 'react'
import Subheader from 'material-ui/Subheader'
import {List, ListItem} from 'material-ui/List'
import {getPowerRequiredInCA, getPowerPicoOutputCA} from '../../utils/formulas'
const InverterOfPower = ({totals, power_factor=0})=> {
    
    const {power_total=0, power_p_total=0} = totals
    return <div>
        <Subheader>Inversor de corriente</Subheader>
        <List>
            <ListItem>Potencia requerida en CA <b>{getPowerRequiredInCA(power_total, power_factor)} VA</b></ListItem>
            <ListItem>Corriente pico de salida en CA <b>{getPowerPicoOutputCA(power_p_total, power_factor)} A</b></ListItem>
        </List>
    </div>
}
export default InverterOfPower
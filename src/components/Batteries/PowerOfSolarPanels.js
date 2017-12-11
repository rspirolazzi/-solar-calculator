import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import {totalPowerSolarPanel} from '../../utils/collection'
const PowerOfSolarPanels = ({solarPanels})=> {
    let total = totalPowerSolarPanel(solarPanels)
    return <List>
        <ListItem>Potencia total del sistema fotovoltaico <b>{total} W</b></ListItem>
    </List>
}
export default PowerOfSolarPanels
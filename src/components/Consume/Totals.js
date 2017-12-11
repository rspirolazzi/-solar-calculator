import React, {Component} from 'react'
import {
    List,
    ListItem,
} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const TotalsConsume = ({winter=0, summer=0, ofYear=0})=><List>
    <Subheader>Consumos</Subheader>
    <ListItem>Consumo total promedio Invierno <b>{winter} Wh/día</b></ListItem>
    <ListItem>Consumo total promedio Verano <b>{summer} Wh/día</b></ListItem>
    <Divider/>
    <ListItem>Consumo máximo del año <b>{ofYear} Wh/día</b></ListItem>
</List>
export default TotalsConsume
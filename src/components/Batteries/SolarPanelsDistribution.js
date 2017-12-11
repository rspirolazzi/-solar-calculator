import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
const SolarPanelsDistribution = ({series, parallel})=><div><Subheader>Disposición de paneles</Subheader>
        <List>
            <ListItem>Cantidad de paneles en serie <b>{series}</b></ListItem>
            <ListItem>Cantidad de paneles en paralelo <b>{parallel}</b></ListItem>
        </List>
    </div>
export default SolarPanelsDistribution
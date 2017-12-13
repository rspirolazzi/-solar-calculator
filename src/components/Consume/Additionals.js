import React from 'react'
import {
    List,
    ListItem,
} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

const AdditionalsTable = ({power_total=0, power_p_total=0})=><List>
    <Subheader>Totales</Subheader>
    <ListItem>Potencia Total <b>{power_total} W</b></ListItem>
    <ListItem>Potencia Pico Total <b>{power_p_total} W</b></ListItem>
</List>
export default AdditionalsTable
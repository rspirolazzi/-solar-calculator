import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import {
    List,
    ListItem,
} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Badge from 'material-ui/Badge'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const AdditionalsTable = ({power_total=0, power_p_total=0})=><List>
    <Subheader>Totales</Subheader>
    <ListItem>Potencia Total <b>{power_total} W</b></ListItem>
    <ListItem>Potencia Pico Total <b>{power_p_total} W</b></ListItem>
</List>
export default AdditionalsTable
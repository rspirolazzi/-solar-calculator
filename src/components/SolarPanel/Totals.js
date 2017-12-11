import React, {Component} from 'react'
import {
    List,
    ListItem,
} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import {reduceAddToNumber} from '../../utils/collection'
const TotalsConsume = ({items=[]})=> {
    let totalPrice = reduceAddToNumber(items, 'subtotal')
    let totalQty = reduceAddToNumber(items, 'qty')
    return <List>
        <Subheader>Cantidad de Paneles Solares</Subheader>
        <ListItem>Cantidad Total <b>{totalQty}</b></ListItem>
        <ListItem>Costo de Inversión <b>USD {totalPrice}</b></ListItem>
    </List>
}
export default TotalsConsume
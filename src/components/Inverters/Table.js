import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import Subheader from 'material-ui/Subheader'
import {List, ListItem} from 'material-ui/List'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import RemoveAdd from 'material-ui/svg-icons/content/remove'

import {reduceAddToNumber} from '../../utils/collection'

const headers = [
    'Corriente',
    'Modelo',
    'Costo',
    'Cantidad',
    'SubTotal',
    '',
]

const TextRow = ({id, power,name,price,qty, subtotal, actionButton})=>
    <TableRow selectable={false}>
        <TableRowColumn>{power}</TableRowColumn>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{price}</TableRowColumn>
        <TableRowColumn>{qty}</TableRowColumn>
        <TableRowColumn>{subtotal}</TableRowColumn>
        <TableRowColumn>{actionButton(id)}</TableRowColumn>
    </TableRow>

const InverterTable = ({items=[], onClickAdd, onClickRemove})=> {
    const removeButton = (id, data) => <FloatingActionButton secondary={true} onClick={(e)=>onClickRemove(e, id, data)}
                                                             mini={true}><RemoveAdd /></FloatingActionButton>

    return <div>
        <Subheader>Reguladores de Carga</Subheader> 
        <Table selectable={false}>
            <TableHeader>
                <TableRow>{headers.map(col=><TableHeaderColumn key={col}>{col}</TableHeaderColumn>)}</TableRow>
            </TableHeader>
            <TableBody>
                {items.map(row=><TextRow key={row.id} {...row} id={row.id} actionButton={removeButton}/>)}
            </TableBody>
        </Table>
        <List>
            <ListItem>Costo de Inversión <b>USD {reduceAddToNumber(items, 'subtotal')}</b></ListItem>
        </List>
    </div>
}
export default InverterTable
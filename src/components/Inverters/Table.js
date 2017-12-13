import React from 'react'
import TextFieldRow from './TextFieldRow'
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
import ContentAdd from 'material-ui/svg-icons/content/add'
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

const TextRow = ({id, power,model,price,qty, subTotal, actionButton})=>
    <TableRow selectable={false}>
        <TableRowColumn>{power}</TableRowColumn>
        <TableRowColumn>{model}</TableRowColumn>
        <TableRowColumn>{price}</TableRowColumn>
        <TableRowColumn>{qty}</TableRowColumn>
        <TableRowColumn>{subTotal}</TableRowColumn>
        <TableRowColumn>{actionButton(id)}</TableRowColumn>
    </TableRow>

const InverterTable = ({items=[], onClickAdd, onClickRemove})=> {
    const addButton = (id, data, cb) => <FloatingActionButton onClick={(e)=>{cb();onClickAdd(e, data)}} mini={true}><ContentAdd /></FloatingActionButton>
    const removeButton = (id, data) => <FloatingActionButton onClick={(e)=>onClickRemove(e, id, data)}
                                                             mini={true}><RemoveAdd /></FloatingActionButton>

    return <div>
        <Subheader>Reguladores de Carga</Subheader> 
        <Table selectable={false}>
            <TableHeader>
                <TableRow>{headers.map(col=><TableHeaderColumn key={col}>{col}</TableHeaderColumn>)}</TableRow>
            </TableHeader>
            <TableBody>
                <TextFieldRow {...{}} actionButton={addButton}/>
                {items.map(row=><TextRow key={row.id} {...row} id={row.id} actionButton={removeButton}/>)}
            </TableBody>
        </Table>
        <List>
            <ListItem>Costo de Inversión <b>USD {reduceAddToNumber(items, 'subTotal')}</b></ListItem>
        </List>
    </div>
}
export default InverterTable
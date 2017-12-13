import React from 'react'
import TextFieldRow from './TextFieldRow'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import RemoveAdd from 'material-ui/svg-icons/content/remove'

const headers = [
    'Potencia del Panel',
    'Voltaje del panel',
    'Corriente de Corto Circuito',
    'Corriente Nominal',
    'Modelo',
    'Costo',
    'Cantidad',
    'Total',
    'Temperatura',
    '',
    //'',
]

const TextRow=({id,power,vol,short_power,nominal_power,model,price, qty, subtotal, temp, actionButton})=>{
    return <TableRow selectable={false}>
        <TableRowColumn>{power}</TableRowColumn>
        <TableRowColumn>{vol}</TableRowColumn>
        <TableRowColumn>{short_power}</TableRowColumn>
        <TableRowColumn>{nominal_power}</TableRowColumn>
        <TableRowColumn>{model}</TableRowColumn>
        <TableRowColumn>{price}</TableRowColumn>
        <TableRowColumn>{qty}</TableRowColumn>
        <TableRowColumn>{subtotal}</TableRowColumn>
        <TableRowColumn>{temp}</TableRowColumn>
        <TableRowColumn>{actionButton(id)}</TableRowColumn>
        {/*<TableRowColumn><a>[Avanzada - Energía Producida por el Panel]</a></TableRowColumn>*/}
    </TableRow>
}
const SolarPanelTable = ({items=[], onClickAdd, onClickRemove})=>{
    const addButton = (id, data, cb) => <FloatingActionButton onClick={(e)=>{cb();onClickAdd(e, data)}} mini={true}><ContentAdd /></FloatingActionButton>
    const removeButton = (id) => <FloatingActionButton onClick={(e)=>onClickRemove(e, id)} mini={true}><RemoveAdd /></FloatingActionButton>

    return <Table selectable={false}>
    <TableHeader>
        <TableRow>{headers.map(col=><TableHeaderColumn key={col}>{col}</TableHeaderColumn>)}</TableRow>
    </TableHeader>
    <TableBody>
        <TextFieldRow actionButton={addButton}/>
        {items.map(row=><TextRow key={row.id} {...row} actionButton={removeButton}/>)}
    </TableBody>
</Table>}
export default SolarPanelTable
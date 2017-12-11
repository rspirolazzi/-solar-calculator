import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
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

const headers = [
    'Potencia del Panel',
    'Voltaje del panel',
    'Corriente de Corto Circuito',
    'Corriente Nominal',
    'Modelo',
    'Costo USD IVA (10,5) incluido',
    '',
]
const TextFieldRow=({name,qty, watt,winterHs, summerHs, buttonComponent})=>{
    return <TableRow selectable={false}>
        <TableRowColumn><TextField name="" hintText="Potencia del Panel" type="text"/></TableRowColumn>
        <TableRowColumn><TextField name="" hintText="Voltaje del panel" type="text"/></TableRowColumn>
        <TableRowColumn><TextField name="" hintText="Corriente de Corto Circuito" type="text"/></TableRowColumn>
        <TableRowColumn><TextField name="" hintText="Corriente Nominal" type="text"/></TableRowColumn>
        <TableRowColumn><TextField name="" hintText="Modelo" type="text"/></TableRowColumn>
        <TableRowColumn><TextField name="" hintText="Costo USD IVA (10,5) incluido" type="text"/></TableRowColumn>
        <TableRowColumn><FloatingActionButton mini={true}><ContentAdd /></FloatingActionButton></TableRowColumn>
    </TableRow>
}
const ConsumeTable = ({items=[]})=><Table selectable={false}>
    <TableHeader>
        <TableRow>{headers.map(col=><TableHeaderColumn key={col}>{col}</TableHeaderColumn>)}</TableRow>
    </TableHeader>
    <TableBody>
        <TextFieldRow {...{}}/>
        {items.map((row, i)=><TextFieldRow key={i} {...row}/>)}
    </TableBody>
</Table>
export default ConsumeTable
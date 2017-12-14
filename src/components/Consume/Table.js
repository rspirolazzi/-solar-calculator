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
    'Dispositivo',
    'Cant',
    '[W]',
    '[Wt]',
    '[Wpt]',
    'hs/día',
    'Wh/día',
    'hs/día',
    'Wh/día',
    '',
]

const TextRow = ({id, name, qty, watt, winterHs, summerHs, totalWt, totalWpt, totalWinterWhDay, totalSummerWhDay, actionButton})=>
    <TableRow selectable={false}>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{qty}</TableRowColumn>
        <TableRowColumn>{watt}</TableRowColumn>
        <TableRowColumn>{totalWt}</TableRowColumn>
        <TableRowColumn>{totalWpt}</TableRowColumn>
        <TableRowColumn>{winterHs}</TableRowColumn>
        <TableRowColumn>{totalWinterWhDay}</TableRowColumn>
        <TableRowColumn>{summerHs}</TableRowColumn>
        <TableRowColumn>{totalSummerWhDay}</TableRowColumn>
        <TableRowColumn>{actionButton(id)}</TableRowColumn>
    </TableRow>

const ConsumeTable = ({items=[], onClickAdd, onClickRemove})=> {
    const addButton = (id, data, cb) => <FloatingActionButton onClick={(e)=>{cb();onClickAdd(e, data)}} mini={true}><ContentAdd /></FloatingActionButton>
    const removeButton = (id, data) => <FloatingActionButton secondary={true} onClick={(e)=>onClickRemove(e, id, data)}
                                                             mini={true}><RemoveAdd /></FloatingActionButton>

    return <Table selectable={false}>
        <TableHeader>
            <TableRow>{headers.map(col=><TableHeaderColumn key={col}>{col}</TableHeaderColumn>)}</TableRow>
        </TableHeader>
        <TableBody>
            <TextFieldRow {...{}} actionButton={addButton}/>
            {items.map(row=><TextRow key={row.id} {...row} id={row.id} actionButton={removeButton}/>)}
        </TableBody>
    </Table>
}
export default ConsumeTable
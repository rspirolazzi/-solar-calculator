import React from 'react'
import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

import {configVoltageTable} from '../../utils/collection'

const ParamsOfVoltage = ({suggest, selected, onClickSelect})=>{
    const helperToSelectRow=(row)=>{
        if(row && row.length>0){
            onClickSelect(configVoltageTable[row.shift()].v)
        }
    }
    return <div>
        <Subheader>Parámetros del Sistema - Voltaje</Subheader>
        <Table onRowSelection={helperToSelectRow}>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Potencia Max</TableHeaderColumn>
                    <TableHeaderColumn>Voltaje</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody showRowHover={true}>
                {configVoltageTable.map(voltage=>
                    <TableRow key={voltage.key} hoverable={true} selected={selected && voltage.v == selected ||voltage.v == selected}>
                        <TableRowColumn>{voltage.label}</TableRowColumn>
                        <TableRowColumn><b>{voltage.v + ' V'}</b></TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>
        <List>
            <ListItem>Voltaje seleccionado para banco de baterías <b>{selected ? selected : suggest} V</b></ListItem>
        </List>
    </div>
}
export default ParamsOfVoltage
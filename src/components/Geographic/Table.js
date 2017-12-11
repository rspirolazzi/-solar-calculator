import React, {Component} from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import {transformArrayToArrayKeys} from '../../utils/collection'
const headers = [
    {angle:'Ángulo'},
    {jan:'Ene'},
    {feb:'Feb'},
    {mar:'Mar'},
    {apr:'Abr'},
    {may:'May'},
    {jun:'Jun'},
    {jul:'Jul'},
    {aug:'Ago'},
    {sept:'Sep'},
    {oct:'Oct'},
    {nov:'Nov'},
    {dec:'Dic'},
    {avg:'Promedio'},
]
const GeoTable = ({parameters=[], selected, selectedIndex, handleOnSelectRow})=><Table onRowSelection={(selectedRows)=>handleOnSelectRow(selectedRows)} allRowsSelected={false}>
    <TableHeader>
        <TableRow>{transformArrayToArrayKeys(headers).map(col=><TableHeaderColumn key={col.key}>{col.label}</TableHeaderColumn>)}</TableRow>
    </TableHeader>
    <TableBody>
        {parameters.map((row, i)=><TableRow key={i} selected={selectedIndex === i}>
            {Object.values(row).map((value, j)=><TableRowColumn key={i+j}>{value}</TableRowColumn>)}
        </TableRow>)}
    </TableBody>
</Table>
export default GeoTable
import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
const headers = [
    ['Ángulo'],
    ['Ene'],
    ['Feb'],
    ['Mar'],
    ['Abr'],
    ['May'],
    ['Jun'],
    ['Jul'],
    ['Ago'],
    ['Sep'],
    ['Oct'],
    ['Nov'],
    ['Dic'],
    ['Promedio'],
]
const GeoTable = ({result=[], isLoading, selectedIndex, handleOnSelectRow})=>{
    if(isLoading === true){
        return <span>Buscando en Nasa...</span>
    }
    if(result.length === 0){
        return null
    }
    return<Table onRowSelection={(selectedRows)=>handleOnSelectRow(selectedRows)} allRowsSelected={false}>
        <TableHeader>
            <TableRow>{(result[0]).map((col, i)=><TableHeaderColumn key={col}>{headers[i]}</TableHeaderColumn>)}</TableRow>
        </TableHeader>
        <TableBody>
            {result.slice(1).map((row, i)=><TableRow key={i} selected={selectedIndex === i}>
                {(row).map((value, j)=><TableRowColumn key={i+j}>{value}</TableRowColumn>)}
            </TableRow>)}
        </TableBody>
    </Table>
}
export default GeoTable
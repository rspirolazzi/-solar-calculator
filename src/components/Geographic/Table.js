import React from 'react'
import Loading from '../Loading'
import styles from '../../styles'
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
        return <Loading show={isLoading}/>
    }
    if(result.length === 0){
        return null
    }
    return<Table onRowSelection={(selectedRows)=>handleOnSelectRow(selectedRows)} allRowsSelected={false}>
        <TableHeader>
            <TableRow>{(result[0]).map((col, i)=><TableHeaderColumn style={styles.TableRowColumnMin} key={col}>{headers[i]}</TableHeaderColumn>)}</TableRow>
        </TableHeader>
        <TableBody>
            {result.slice(1, result.length-1).map((row, i)=><TableRow key={i} selected={selectedIndex === i}>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[0]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[1]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[2]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[3]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[4]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[5]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[6]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[7]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[8]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[9]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[10]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[11]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[12]}</TableRowColumn>
                <TableRowColumn style={styles.TableRowColumnMin}>{row[13]}</TableRowColumn>
            </TableRow>)}
        </TableBody>
    </Table>
}
export default GeoTable
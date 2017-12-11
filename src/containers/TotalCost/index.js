import React, {Component} from 'react'
import {connect} from 'react-redux'
import LayoutCard from '../../components/LayoutCard'

import {List, ListItem} from 'material-ui/List'
import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    TableRow,
    TableRowColumn,
    TableFooter,
} from 'material-ui/Table'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import Info from 'material-ui/svg-icons/action/info'
import FontIcon from 'material-ui/FontIcon'

class TotalCost extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {inverter} = this.props;
        const {items} = inverter
        return <LayoutCard title="COSTO DE INVERSIÓN EN EQUIPOS">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Componente</TableHeaderColumn>
                        <TableHeaderColumn>Modelo</TableHeaderColumn>
                        <TableHeaderColumn>Cantidad</TableHeaderColumn>
                        <TableHeaderColumn>Inversión</TableHeaderColumn>
                        <TableHeaderColumn>%</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow><TableRowColumn>Paneles Solares</TableRowColumn><TableRowColumn>Solartec KS80T - SL*</TableRowColumn><TableRowColumn>16</TableRowColumn><TableRowColumn>USD 5.719,48</TableRowColumn><TableRowColumn>62%</TableRowColumn></TableRow>
                    <TableRow><TableRowColumn>Banco de Baterías</TableRowColumn><TableRowColumn>Moura CLEAN 12MF220</TableRowColumn><TableRowColumn>4</TableRowColumn><TableRowColumn>USD 2.203,41</TableRowColumn><TableRowColumn>24%</TableRowColumn></TableRow>
                    <TableRow><TableRowColumn>Regulador de carga</TableRowColumn><TableRowColumn>SOLARTEC SC40</TableRowColumn><TableRowColumn>1</TableRowColumn><TableRowColumn>USD 217,69</TableRowColumn><TableRowColumn>2%</TableRowColumn></TableRow>
                    <TableRow><TableRowColumn>Regulador de carga</TableRowColumn><TableRowColumn>SOLARTEC SC20</TableRowColumn><TableRowColumn>1</TableRowColumn><TableRowColumn>USD 141,99</TableRowColumn><TableRowColumn>2%</TableRowColumn></TableRow>
                    <TableRow><TableRowColumn>Inversor de corriente</TableRowColumn><TableRowColumn>TGP 24 600</TableRowColumn><TableRowColumn>1</TableRowColumn><TableRowColumn>USD 997,65</TableRowColumn><TableRowColumn>11%</TableRowColumn></TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn><TableRowColumn></TableRowColumn><TableRowColumn>USD 9.280,21</TableRowColumn><TableRowColumn></TableRowColumn></TableRow>
                </TableFooter>
            </Table>
            <Divider/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Componente</TableHeaderColumn>
                        <TableHeaderColumn>Inversión</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow><TableRowColumn>Cables</TableRowColumn><TableRowColumn>USD 650,00</TableRowColumn></TableRow>
                    <TableRow><TableRowColumn>Tablero</TableRowColumn><TableRowColumn>USD 550,00</TableRowColumn></TableRow>
                    <TableRow><TableRowColumn>Soportes</TableRowColumn><TableRowColumn>USD 800,00</TableRowColumn></TableRow>
                    <TableRow><TableRowColumn>Instalación (7 dias de trabajo)</TableRowColumn><TableRowColumn>USD 1.400,00</TableRowColumn></TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow><TableRowColumn></TableRowColumn><TableRowColumn>USD 3.400,00</TableRowColumn></TableRow>
                </TableFooter>
            </Table>
        </LayoutCard>
    }
}
const mapStateToProps = (state, props)=> {
    const {inverter} = state
    return {
        inverter
    }
}
export default connect(mapStateToProps)(TotalCost)
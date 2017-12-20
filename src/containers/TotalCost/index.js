import React, {Component} from 'react'
import {connect} from 'react-redux'
import LayoutCard from '../../components/LayoutCard'
import {getTotalOfCost} from '../../utils/collection'

import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    TableRow,
    TableRowColumn,
    TableFooter,
} from 'material-ui/Table'

class TotalCost extends Component {
    render() {
        const {inverter, solarPanel, battery} = this.props
        const {isComplete} = inverter
        let total = getTotalOfCost(this.props)
        let id = 0
        return <LayoutCard show={isComplete} title="COSTO DE INVERSIÓN EN EQUIPOS">
            <Table selectable={false}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Componente</TableHeaderColumn>
                        <TableHeaderColumn>Modelo</TableHeaderColumn>
                        <TableHeaderColumn>Cantidad</TableHeaderColumn>
                        <TableHeaderColumn>Inversión</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {solarPanel.items.map(panel=><TableRow key={id++}>
                        <TableRowColumn>Paneles Solares</TableRowColumn>
                        <TableRowColumn>{panel.name}</TableRowColumn>
                        <TableRowColumn>{panel.qty}</TableRowColumn>
                        <TableRowColumn>USD {panel.subtotal}</TableRowColumn>
                    </TableRow>)}
                    {battery.items.map(bat=><TableRow key={id++}>
                        <TableRowColumn>Banco de Baterías</TableRowColumn>
                        <TableRowColumn>{bat.name}</TableRowColumn>
                        <TableRowColumn>{battery.totalOfBattery.qty}</TableRowColumn>
                        <TableRowColumn>USD {battery.totalOfBattery.qty*bat.price}</TableRowColumn>
                    </TableRow>)}
                    {inverter.items.map(inv=><TableRow key={id++}>
                        <TableRowColumn>Regulador de carga</TableRowColumn>
                        <TableRowColumn>{inv.name}</TableRowColumn>
                        <TableRowColumn>{inv.qty}</TableRowColumn>
                        <TableRowColumn>USD {inv.price}</TableRowColumn>
                    </TableRow>)}
                    <TableRow>
                        <TableRowColumn>Inversor de corriente</TableRowColumn>
                        <TableRowColumn>{inverter.name}</TableRowColumn>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>USD {inverter.price}</TableRowColumn>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn colSpan="4">USD {total}</TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        </LayoutCard>
    }
}
const mapStateToProps = (state, props)=> {
    return {
        inverter: state.inverter,
        solarPanel: state.solarPanel,
        battery: state.battery,
    }
}
export default connect(mapStateToProps)(TotalCost)
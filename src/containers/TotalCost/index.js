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
import {price as priceFormat} from '../../utils/format'
class TotalCost extends Component {
    render() {
        const {inverter, solarPanel, battery} = this.props
        let total = getTotalOfCost(this.props)
        let id = 0
        return <LayoutCard title="COSTO DE INVERSIÓN EN EQUIPOS">
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
                        <TableRowColumn>{priceFormat(panel.subtotal)}</TableRowColumn>
                    </TableRow>)}
                    {battery.items.map(bat=><TableRow key={id++}>
                        <TableRowColumn>Banco de Baterías</TableRowColumn>
                        <TableRowColumn>{bat.name}</TableRowColumn>
                        <TableRowColumn>{battery.totalOfBattery.qty}</TableRowColumn>
                        <TableRowColumn>{priceFormat(battery.totalOfBattery.qty*bat.price)}</TableRowColumn>
                    </TableRow>)}
                    {inverter.items.map(inv=><TableRow key={id++}>
                        <TableRowColumn>Regulador de carga</TableRowColumn>
                        <TableRowColumn>{inv.name}</TableRowColumn>
                        <TableRowColumn>{inv.qty}</TableRowColumn>
                        <TableRowColumn>{priceFormat(inv.price)}</TableRowColumn>
                    </TableRow>)}
                    <TableRow>
                        <TableRowColumn>Inversor de corriente</TableRowColumn>
                        <TableRowColumn>{inverter.name}</TableRowColumn>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>{priceFormat(inverter.price)}</TableRowColumn>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn>{priceFormat(total)}</TableRowColumn>
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
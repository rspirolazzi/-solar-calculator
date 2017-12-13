import React, {Component} from 'react'
import {connect} from 'react-redux'
import LayoutCard from '../../components/LayoutCard'

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
        return <LayoutCard title="COSTO DE INVERSIÓN EN EQUIPOS">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Componente</TableHeaderColumn>
                        <TableHeaderColumn>Modelo</TableHeaderColumn>
                        <TableHeaderColumn>Cantidad</TableHeaderColumn>
                        <TableHeaderColumn>Inversión</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {solarPanel.items.map(panel=><TableRow key={panel.id}>
                        <TableRowColumn>Paneles Solares</TableRowColumn>
                        <TableRowColumn>{panel.model}</TableRowColumn>
                        <TableRowColumn>{panel.qty}</TableRowColumn>
                        <TableRowColumn>USD {panel.subtotal}</TableRowColumn>
                    </TableRow>)}
                    {battery.items.map(bat=><TableRow>
                        <TableRowColumn>Banco de Baterías</TableRowColumn>
                        <TableRowColumn>{bat.model}</TableRowColumn>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>USD {bat.price}</TableRowColumn>
                    </TableRow>)}
                    {inverter.items.map(inv=><TableRow>
                        <TableRowColumn>Regulador de carga</TableRowColumn>
                        <TableRowColumn>{inv.model}</TableRowColumn>
                        <TableRowColumn>{inv.qty}</TableRowColumn>
                        <TableRowColumn>USD {inv.price}</TableRowColumn>
                    </TableRow>)}
                    <TableRow>
                        <TableRowColumn>Inversor de corriente</TableRowColumn>
                        <TableRowColumn>{inverter.model}</TableRowColumn>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>USD {inverter.price}</TableRowColumn>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn>USD {0}</TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
            {/*<Divider/>
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
             </Table>*/}
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
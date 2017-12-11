import React, {Component} from 'react'
import TextFieldRowConsume from '../../components/Consume/TextFieldRow'
import TextField from 'material-ui/TextField'
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
class TextFieldRow extends TextFieldRowConsume {

    initState() {
        return {
            power:0,
            vol:0,
            short_power:0,
            nominal_power:0,
            model:'',
            price:0,
            qty:1,
            subtotal:0,
            temp:25,
        }
    }

    calculateValues() {
        let subtotal = 0
        if(typeof parseFloat(this.state.price ==='number') || typeof parseFloat(this.state.qty)==='number'){
            subtotal = parseFloat(this.state.price * this.state.qty).toFixed(2)
            this.setState({subtotal })
        }
    }

    render() {
        return <TableRow selectable={false}>
            <TableRowColumn><TextField hintText="Potencia del Panel" value={this.state.power} onChange={this.onChange} name="power" type="text"/></TableRowColumn>
            <TableRowColumn><TextField hintText="Voltaje del panel" value={this.state.vol} onChange={this.onChange} name="vol" type="text"/></TableRowColumn>
            <TableRowColumn><TextField hintText="Corriente de Corto Circuito" value={this.state.short_power} onChange={this.onChange} name="short_power" type="number"/></TableRowColumn>
            <TableRowColumn><TextField hintText="Corriente Nominal" value={this.state.nominal_power} onChange={this.onChange} name="nominal_power" type="number"/></TableRowColumn>
            <TableRowColumn><TextField hintText="Modelo" value={this.state.model} onChange={this.onChange} name="model" type="text"/></TableRowColumn>
            <TableRowColumn><TextField hintText="Costo USD IVA (10,5) incluido" value={this.state.price} onChange={this.onChange} name="price" type="number"/></TableRowColumn>
            <TableRowColumn><TextField hintText="Cantidad" value={this.state.qty} onChange={this.onChange} name="qty" type="number"/></TableRowColumn>
            <TableRowColumn>{this.state.subtotal}</TableRowColumn>
            <TableRowColumn><TextField hintText="Temperatura" value={this.state.temp} onChange={this.onChange} name="temp" type="number"/></TableRowColumn>
            <TableRowColumn>{this.props.actionButton(this.props.id, this.state, this.resetForm)}</TableRowColumn>
        </TableRow>
    }
}
export default TextFieldRow
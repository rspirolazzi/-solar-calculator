import React from 'react'
import TextFieldRowConsume from '../../components/Consume/TextFieldRow'
import TextField from 'material-ui/TextField'
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import _ from 'lodash'
class TextFieldRow extends TextFieldRowConsume {

    initState() {
        return {
            power:0,
            model:'',
            price:0,
            qty:1,
            subTotal:0
        }
    }

    calculateValues() {
        let subTotal = 0
        if(typeof _.toNumber(this.state.price) ==='number' && typeof _.toNumber(this.state.qty)==='number'){
            subTotal = (_.toNumber(this.state.price) * _.toNumber(this.state.qty)).toFixed(2)
            this.setState({subTotal })
        }
    }

    render() {
        return <TableRow selectable={false}>
            <TableRowColumn><TextField floatingLabelText="Corriente"  hintText="Corriente"  onChange={this.onChange} value={this.state.power} name="power" type="number"/></TableRowColumn>
            <TableRowColumn><TextField floatingLabelText="Modelo"  hintText="Modelo"  onChange={this.onChange} value={this.state.model} name="model" type="text"/></TableRowColumn>
            <TableRowColumn><TextField floatingLabelText="Costo USD IVA (10,5) incluido"  hintText="Costo USD IVA (10,5) incluido"  onChange={this.onChange} value={this.state.price} name="price" type="number"/></TableRowColumn>
            <TableRowColumn><TextField floatingLabelText="Cantidad"  hintText="Cantidad"  onChange={this.onChange} value={this.state.qty} name="qty" type="number"/></TableRowColumn>
            <TableRowColumn>{this.state.subTotal}</TableRowColumn>
            <TableRowColumn>{this.props.actionButton(this.props.id, this.state, this.resetForm)}</TableRowColumn>
        </TableRow>
    }
}
export default TextFieldRow
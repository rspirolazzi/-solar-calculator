import React, {Component} from 'react'
import PropTypes  from 'prop-types'
import TextField from 'material-ui/TextField'
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
class TextFieldRow extends Component {

    constructor(props) {
        super(props)
        this.state = this.initState()
        this.onChange = this.onChange.bind(this)
        this.calculateValues = this.calculateValues.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.initState = this.initState.bind(this)
    }
    initState() {
        return {
            name: '',
            qty: '',
            watt: '',
            winterHs: '',
            summerHs: '',
            totalWt: 0,
            totalWpt: 0,
            totalWinterWhDay: 0,
            totalSummerWhDay: 0,
        }
    }
    resetForm() {
        this.setState(this.initState())
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value}, this.calculateValues)
    }

    calculateValues() {
        const result = {}
        result.totalWt = Math.max(0, (this.state.watt * this.state.qty)) || 0
        result.totalWpt = Math.max(0, (this.state.watt * this.state.qty)) || 0
        result.totalWinterWhDay = Math.max(0, (this.state.watt * this.state.qty * this.state.winterHs)) || 0
        result.totalSummerWhDay = Math.max(0, (this.state.watt * this.state.qty * this.state.summerHs)) || 0
        this.setState({...result})
    }

    render() {
        return <TableRow selectable={false}>
            <TableRowColumn><TextField value={this.state.name} onChange={this.onChange} name="name" type="text"/></TableRowColumn>
            <TableRowColumn><TextField value={this.state.qty} onChange={this.onChange} name="qty" type="number"/></TableRowColumn>
            <TableRowColumn><TextField value={this.state.watt} onChange={this.onChange} name="watt" type="number"/></TableRowColumn>
            <TableRowColumn>{this.state.totalWt}</TableRowColumn>
            <TableRowColumn>{this.state.totalWpt}</TableRowColumn>
            <TableRowColumn><TextField value={this.state.winterHs} onChange={this.onChange} name="winterHs" type="number"/></TableRowColumn>
            <TableRowColumn>{this.state.totalWinterWhDay}</TableRowColumn>
            <TableRowColumn><TextField value={this.state.summerHs} onChange={this.onChange} name="summerHs" type="number"/></TableRowColumn>
            <TableRowColumn>{this.state.totalSummerWhDay}</TableRowColumn>
            <TableRowColumn>{this.props.actionButton(this.props.id, this.state, this.resetForm)}</TableRowColumn>
        </TableRow>
    }
}
TextFieldRow.propTypes={
    actionButton : PropTypes.func.isRequired
}
export default TextFieldRow
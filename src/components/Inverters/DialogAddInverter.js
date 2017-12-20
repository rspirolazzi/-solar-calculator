import React from 'react'
import Dialog from '../Common/Dialog'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import PropTypes from 'prop-types'
import {Row, Col1, Col2, Col4} from '../../components/Common/Grid'
import _ from 'lodash'
export default class DialogAddInverter extends Dialog {
    
    initState = ()=>({
        power:0,
        name:'',
        price:0,
        qty:1,
        subtotal:0
    })
    
    calculateValues=(form) =>{
        const result = {}
        if(typeof _.toNumber(form.price) ==='number' && typeof _.toNumber(form.qty)==='number') {
            result.subtotal = (_.toNumber(form.price) * _.toNumber(form.qty)).toFixed(2)
        }
        Object.assign(form, {...result})
    }

    renderContentModal = ()=><form onSubmit={this.clickSubmit}>
        <Row>
            <Col4>
                <TextField fullWidth floatingLabelText="Modelo" hintText="" value={this.state.form.name} onChange={this.onChange} name="name" type="text"/>
            </Col4>
            <Col1>
                <TextField fullWidth floatingLabelText="Corriente" hintText=""  value={this.state.form.power} onChange={this.onChange} name="power" type="number"/>
            </Col1>
            <Col1>
                <TextField fullWidth floatingLabelText="Precio" hintText="" value={this.state.form.price} onChange={this.onChange} name="price" type="number"/>
            </Col1>
            <Col1>
                <TextField fullWidth floatingLabelText="Cantidad" hintText="" value={this.state.form.qty} onChange={this.onChange} name="qty" type="number"/>
            </Col1>
            <Col1>
                <TextField fullWidth floatingLabelText="Subtotal" disabled={true} hintText="" value={this.state.form.subtotal}  defaultValue={this.state.form.subtotal} onChange={this.onChange} name="subtotal" type="number"/>
            </Col1>
        </Row>
    </form>
}
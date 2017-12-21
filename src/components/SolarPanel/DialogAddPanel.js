import React from 'react'
import Dialog from '../Common/Dialog'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import PropTypes from 'prop-types'
import {Row, Col1, Col2, Col4} from '../../components/Common/Grid'

export default class DialogAddPanel extends Dialog {
    
    initState = ()=>({
        power:0,
        vol:0,
        short_power:0,
        nominal_power:0,
        name:'',
        price:0,
        qty:1,
        subtotal:0,
        temp:25,
    })


    calculateValues=(form) =>{
        const result = {}
        if(typeof parseFloat(form.price ==='number') || typeof parseFloat(form.qty)==='number'){
            result.subtotal = parseFloat(form.price * form.qty)
        }
        Object.assign(form, {...result})
    }

    renderContentModal = ()=><form onSubmit={this.clickSubmit}>
        <Row>
            <Col4>
                <TextField autoFocus fullWidth floatingLabelText="Modelo" hintText="Ejemplo: Solartec KS80T - SL*"  value={this.state.form.name} onChange={this.onChange} name="name" type="text"/>
            </Col4>
            <Col1>
                <TextField fullWidth floatingLabelText="Potencia del Panel (W)" hintText="Ejemplo: 80" value={this.state.form.power} onChange={this.onChange} name="power" type="number"/>
            </Col1>
            <Col1>
                <TextField fullWidth floatingLabelText="Voltaje del panel (V)" hintText="Ejemplo: 12" value={this.state.form.vol} onChange={this.onChange} name="vol" type="number"/>
            </Col1>
            <Col1>
                <TextField fullWidth floatingLabelText="Corriente de Corto Circuito (A)" hintText="Ejemplo: 5.01" value={this.state.form.short_power} onChange={this.onChange} name="short_power" type="number"/>
            </Col1>
            <Col1>
                <TextField fullWidth floatingLabelText="Corriente Nominal (A)" hintText="Ejemplo: 4.60" value={this.state.form.nominal_power} onChange={this.onChange} name="nominal_power" type="number"/>
            </Col1>

            <Col1>
                <TextField fullWidth floatingLabelText="Precio" hintText="Ejemplo: 357.47"  value={this.state.form.price} onChange={this.onChange} name="price" type="number"/>
            </Col1>
            <Col1>
                <TextField fullWidth floatingLabelText="Cantidad" hintText="Ejemplo: 16"  value={this.state.form.qty} onChange={this.onChange} name="qty" type="number"/>
            </Col1>
            <Col2>
                <TextField fullWidth floatingLabelText="Subtotal" hintText="" disabled={true} defaultValue={this.state.form.subtotal} value={this.state.form.subtotal} onChange={this.onChange} name="subtotal" type="number"/>
            </Col2>
            <Col1>
                <TextField fullWidth floatingLabelText="Temperatura" hintText="Ejemplo: 25" value={this.state.form.temp} onChange={this.onChange} name="temp" type="number"/>
            </Col1>
        </Row>
    </form>
}
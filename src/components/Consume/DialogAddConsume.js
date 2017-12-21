import React from 'react'
import Dialog from '../Common/Dialog'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import PropTypes from 'prop-types'
import {Row, Col1, Col2, Col4} from '../../components/Common/Grid'

export default class DialogAddConsume extends Dialog {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            automatic:{
                totalWt:true,
                totalWpt:true,
                totalWinterWhDay:true,
                totalSummerWhDay:true,
            },
            form: this.initState()
        }
    }

    initState = ()=>({
        name: '',
        qty: '',
        watt: '',
        winterHs: '',
        summerHs: '',
        totalWt: 0,
        totalWpt: 0,
        totalWinterWhDay: 0,
        totalSummerWhDay: 0,
    })
    
    onChangeAuto=(e, isInputChecked)=> {
        const {form} = this.state
        this.calculateValues(form)
        this.setState({
            form:form,
            automatic: {[e.target.name]: isInputChecked}
        })
    }
    
    calculateValues=(form) =>{
        const result = {}
        result.totalWt = Math.max(0, (form.watt * form.qty)) || 0
        if(this.state.automatic.totalWpt){
            result.totalWpt = Math.max(0, (form.watt * form.qty)) || 0
        }
        result.totalWinterWhDay = Math.max(0, (form.watt * form.qty * form.winterHs)) || 0
        result.totalSummerWhDay = Math.max(0, (form.watt * form.qty * form.summerHs)) || 0
        Object.assign(form, {...result})
    }

    renderContentModal = ()=><form onSubmit={this.clickSubmit}>
        <Row>
            <Col4>
                <TextField autoFocus fullWidth floatingLabelText="Dispositivo" hintText="TV 55''" value={this.state.form.name} onChange={this.onChange} name="name" ref="name" type="text"/>
            </Col4>
            <Col2>
                <TextField fullWidth floatingLabelText="Cantidad" hintText="1" value={this.state.form.qty} onChange={this.onChange} name="qty" ref="qty" type="number"/>
            </Col2>
            <Col2>
                <TextField fullWidth floatingLabelText="Potencia [W]" hintText="600" value={this.state.form.watt} onChange={this.onChange} name="watt" ref="watt" type="number"/>
            </Col2>
            <Col1>
                <TextField fullWidth floatingLabelText="Total [W]" hintText="" disabled={true} defaultValue={this.state.form.totalWt} value={this.state.form.totalWt} onChange={this.onChange} name="totalWt" ref="totalWt" type="number"/>
            </Col1>
            <Col1>
                <TextField fullWidth floatingLabelText="Total pico [W]" hintText="" disabled={this.state.automatic.totalWpt} defaultValue={this.state.form.totalWpt} value={this.state.form.totalWpt} onChange={this.onChange} name="totalWpt" ref="totalWpt" type="number"/>
            </Col1>
            <Col2>
                <Toggle label="Calculo automatico (Total Pico)" defaultToggled={true} name="totalWpt" ref="totalWpt" onToggle={this.onChangeAuto}/>
            </Col2>
            <Col2>
                <TextField fullWidth floatingLabelText="HS Invierto" hintText="" value={this.state.form.winterHs} onChange={this.onChange} name="winterHs" ref="winterHs" type="number"/>
            </Col2>
            <Col2>
                <TextField fullWidth floatingLabelText="Total HS Inviertno" hintText="" disabled={true} defaultValue={this.state.form.totalWinterWhDay} value={this.state.form.totalWinterWhDay} onChange={this.onChange} name="totalWinterWhDay" ref="totalWinterWhDay" type="number"/>
            </Col2>
            <Col2>
                <TextField fullWidth floatingLabelText="HS Verano" hintText="" value={this.state.form.summerHs} onChange={this.onChange} name="summerHs" ref="summerHs" type="number"/>
            </Col2>
            <Col2>
                <TextField fullWidth floatingLabelText="Total HS Verano" hintText="" disabled={true} defaultValue={this.state.form.totalSummerWhDay} value={this.state.form.totalSummerWhDay} onChange={this.onChange} name="totalSummerWhDay" ref="totalSummerWhDay" type="number"/>
            </Col2>
        </Row>
    </form>
}
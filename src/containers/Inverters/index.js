import React, {Component} from 'react'
import {connect} from 'react-redux'
import LayoutCard from '../../components/LayoutCard'

import {List, ListItem} from 'material-ui/List'
import {Table,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import Info from 'material-ui/svg-icons/action/info'
import FontIcon from 'material-ui/FontIcon'

class Inverters extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {inverter} = this.props;
        const {items} = inverter
        return <LayoutCard title="DIMENSIONAMIENTO DEL REGULADOR DE CARGA E INVERSOR">
            <Subheader>Regulador de carga</Subheader>
            <List>
                <ListItem>Corriente del regulador <b>50 A</b></ListItem>
            </List>
            <Subheader>Reguladores de Carga</Subheader>
            <TextField floatingLabelText="Corriente"  hintText="Corriente" name="" defaultValue="40 A" /><br/>
            <TextField floatingLabelText="Modelo"  hintText="Modelo" name="" defaultValue="SOLARTEC SC40" /><br/>
            <TextField floatingLabelText="Costo USD IVA (10,5) incluido"  hintText="Costo USD IVA (10,5) incluido" name="" defaultValue="USD 217,69" /><br/>
            <TextField floatingLabelText="Cantidad"  hintText="Cantidad" name="" defaultValue="1" /><br/>
            <TextField floatingLabelText="Corriente"  hintText="Corriente" name="" defaultValue="20 A" /><br/>
            <TextField floatingLabelText="Modelo"  hintText="Modelo" name="" defaultValue="SOLARTEC SC20" /><br/>
            <TextField floatingLabelText="Costo USD IVA (10,5) incluido"  hintText="Costo USD IVA (10,5) incluido" name="" defaultValue="USD 141,99" /><br/>
            <TextField floatingLabelText="Cantidad"  hintText="Cantidad" name="" defaultValue="1" /><br/>
            <span>Costo de Inversión </span><b>USD 359,68</b>

            <Subheader>Inversor de corriente</Subheader>
            <List>
                <ListItem>Potencia requerida en CA <b>491,1 VA</b></ListItem>
                <ListItem>Corriente pico de salida en CA <b>5,42 A</b></ListItem>
            </List>

            <Subheader>Datos del Inversor</Subheader>
            <TextField floatingLabelText="Potencia de Salida"  hintText="Potencia de Salida" name="" defaultValue="600 W" /><b>OK</b><br/>
            <TextField floatingLabelText="Voltaje de Entrada"  hintText="Voltaje de Entrada" name="" defaultValue="24 V" /><br/>
            <TextField floatingLabelText="Máxima corriente"  hintText="Máxima corriente" name="" defaultValue="11 A" /><b>OK</b><br/>
            <TextField floatingLabelText="Modelo"  hintText="Modelo" name="" defaultValue="TGP 24 600" /><br/>
            <TextField floatingLabelText="Costo USD IVA (10,5) incluido"  hintText="Costo USD IVA (10,5) incluido" name="" defaultValue="USD 997,65" /><br/>

            <span>Costo de Inversión </span><b>USD 359,68</b>
        </LayoutCard>
    }
}
const mapStateToProps = (state, props)=> {
    const {inverter} = state
    return {
        inverter
    }
}
export default connect(mapStateToProps)(Inverters)
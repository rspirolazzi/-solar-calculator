import React, {Component} from 'react'

import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

class ListOfBatteries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            daysOfAutonomy: props.daysOfAutonomy,
            deepMaxUncharge: props.deepMaxUncharge,
            unchargeEfficient: props.unchargeEfficient,
            inverterEfficient: props.inverterEfficient,
            items: props.itemsBattery,
        }
        this.onChange = this.onChange.bind(this)
        this.onChangeBattery = this.onChangeBattery.bind(this)
    }

    onChange(e) {
        const {name, value} = e.target
        this.setState({[name]: value}, ()=>this.props.handleOnChange(name, value))
    }
    onChangeBattery(e) {
        const {name, value} = e.target
        this.setState({[name]: value}, ()=>this.props.handleOnChangeBattery(name, value))
    }

    render() {
        const {capacity, voltage, model, price} = this.state.items[0]
        const {totalOfBattery, qtyInSeries,qtyInParallel,maxPowerOfChargeBankBatteries,maxPowerOfUnchargeBankBatteries} = this.props
        return <div>
            <Subheader>Banco de baterías</Subheader>
            <TextField floatingLabelText="Dias de autonomía" hintText="Dias de autonomía" name="daysOfAutonomy" value={this.state.daysOfAutonomy} onChange={this.onChange}/>
            <TextField floatingLabelText="Profundidad máxima de descarga" hintText="Profundidad máxima de descarga" name="deepMaxUncharge" value={this.state.deepMaxUncharge} onChange={this.onChange}/>
            <TextField floatingLabelText="Eficiencia de descarga" hintText="Eficiencia de descarga" name="unchargeEfficient" value={this.state.unchargeEfficient} onChange={this.onChange}/>
            <TextField floatingLabelText="Eficiencia del inversor" hintText="Eficiencia del inversor" name="inverterEfficient" value={this.state.inverterEfficient} onChange={this.onChange}/>
            
            <List>
                <ListItem>Capacidad del banco <b>{this.props.totalBankBattery} Ah</b></ListItem>
            </List>

            <Subheader>Datos de la Batería</Subheader>
            <TextField floatingLabelText="Capacidad de Bateria" hintText="Capacidad de Bateria" name="capacity" value={capacity} onChange={this.onChangeBattery}/>
            <TextField floatingLabelText="Voltaje Bateria" hintText="Voltaje Bateria" name="voltage" value={voltage} onChange={this.onChangeBattery}/>
            <TextField floatingLabelText="Modelo" hintText="Modelo" name="model" value={model} onChange={this.onChangeBattery}/>
            <TextField floatingLabelText="Costo USD IVA (10,5) incluido" hintText="Costo USD IVA (10,5) incluido" name="price" value={price} onChange={this.onChangeBattery}/>

            <Subheader>Datos de la Batería</Subheader>
            <List>
                <ListItem>Cantidad Total <b>{totalOfBattery.qty}</b></ListItem>
                <ListItem>Capacidad Total <b>{totalOfBattery.capacity} Ah</b></ListItem>
                <ListItem>Costo de Inversión <b>USD {totalOfBattery.totalPrice}</b></ListItem>
            </List>

            <Subheader>Disposición de las Baterías</Subheader>
            <List>
                <ListItem>Cantidad de baterias en serie <b>{totalOfBattery.qtyInSeries}</b></ListItem>
                <ListItem>Cantidad de baterias en paralelo <b>{totalOfBattery.qtyInParallel}</b></ListItem>
            </List>

            <Subheader>Corrientes del banco</Subheader>
            <List>
                <ListItem>Corriente máxima de carga <b>{totalOfBattery.maxPowerOfChargeBankBatteries} A</b> <b>OK</b></ListItem>
                <ListItem>Corriente máxima de descarga <b>{totalOfBattery.maxPowerOfUnchargeBankBatteries} A</b> <b>OK</b></ListItem>
                <Divider/>
                <ListItem>C5 (máxima corriente de descarga) <b>88 A</b></ListItem>
                <ListItem>C20 (máxima corriente de carga) <b>22 A</b></ListItem>
            </List>
        </div>
    }
}
export default ListOfBatteries
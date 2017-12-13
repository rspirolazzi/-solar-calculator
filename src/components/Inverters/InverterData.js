import React, {Component} from 'react'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'
class InverterData extends Component{
    constructor(props){
        super(props)
        this.state={
            outputPower:props.outputPower,
            inputVoltage:props.inputVoltage,
            maxPower:props.maxPower,
            model:props.model,
            price:props.price,
            total:0,
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(e){
        const {name, value} = e.target
        this.props.onChange(name, value)
    }
    render(){
        return <div>
            <Subheader>Datos del Inversor</Subheader>
            <TextField type="number" floatingLabelText="Potencia de Salida" hintText="Potencia de Salida" name="outputPower" value={this.state.outputPower} onChange={this.onChange}/>
            <TextField type="number" floatingLabelText="Voltaje de Entrada" hintText="Voltaje de Entrada" name="inputVoltage" value={this.state.inputVoltage} onChange={this.onChange}/>
            <TextField type="number" floatingLabelText="Máxima corriente" hintText="Máxima corriente" name="maxPower" value={this.state.maxPower} onChange={this.onChange}/>
            <TextField type="text" floatingLabelText="Modelo" hintText="Modelo" name="model" value={this.state.model} onChange={this.onChange}/>
            <TextField type="number" floatingLabelText="Costo USD" hintText="Costo USD" name="price" value={this.state.price} onChange={this.onChange}/>
        </div>
    }
}
export default InverterData
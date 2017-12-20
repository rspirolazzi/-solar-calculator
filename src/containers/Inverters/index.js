import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LayoutCard from '../../components/LayoutCard'
import InvertersTable from '../../components/Inverters/Table'
import InverterOfPower from '../../components/Inverters/InverterOfPower'
import InfoCharge from '../../components/Inverters/InfoCharge'
import InverterData from '../../components/Inverters/InverterData'
import {getPowerOfChargeControllerPanel} from '../../utils/formulas'
import {addInverterParam, updateAttribute, removeInverterParam} from '../../actions/inverter'
import DialogAddInverter  from '../../components/Inverters/DialogAddInverter'
class Inverters extends Component {
    render() {
        const {inverter,battery, solarPanel, consume} = this.props;
        const {items} = inverter
        const {isComplete} = battery
        
        return <LayoutCard show={isComplete} title="DIMENSIONAMIENTO DEL REGULADOR DE CARGA E INVERSOR">
            <InfoCharge value={getPowerOfChargeControllerPanel(battery.parallel,solarPanel.items)}/>
            <DialogAddInverter title="Agregar nu regulador de carga" labelDialog="Agregar un regulador" onAdd={this.props.handleAdd}/>
            <InvertersTable items={items} onClickAdd={(e,data)=>this.props.handleAdd(data)} onClickRemove={(e,id)=>this.props.handleRemove(id)}/>
            <InverterOfPower {...consume}/>
            <InverterData {...inverter} onChange={this.props.updateAttribute}/>
        </LayoutCard>
    }
}
const mapStateToProps = (state, props)=> {
    return {
        inverter:state.inverter,
        battery:state.battery,
        solarPanel:state.solarPanel,
        consume:state.consume,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handleAdd: addInverterParam,
        handleRemove: removeInverterParam,
        updateAttribute: updateAttribute,
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Inverters)
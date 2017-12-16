import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LayoutCard from '../../components/LayoutCard'
import InputTable from '../../components/Consume/Table'
import AdditionalsTable from '../../components/Consume/Additionals'
import PowerInput from '../../components/Consume/PowerInput'
import Totals1 from '../../components/Consume/Totals'
import Energy from '../../components/Consume/Energy'
import {updateAttribute} from '../../actions/consume'
import DialogAddConsume  from '../../components/Consume/DialogAddConsume'
//import DialogAddConsume  from '../../components/Common/Dialog'

import {addConsumeParam, removeConsumeParam} from '../../actions/consume'
class Consume extends Component {
    render() {
        const {items, totals, power_factor, energy} = this.props.consume
        const {isComplete} = this.props.geographic
        return <LayoutCard show={isComplete} title="PARAMETROS DE CONSUMO Y ENERGÍA">
            <DialogAddConsume title="Agregar consumo" labelDialog="Agregar un consumo" onAddConsume={this.props.handleAdd}/>
            <InputTable items={items} onClickRemove={(e,id)=>this.props.handleRemove(id)}/>
            <AdditionalsTable {...totals}/>
            <PowerInput value={power_factor} onChangeAttr={this.props.handleUpdateAttr}/>
            <Totals1  {...totals}/>
            <Energy {...energy} {...totals} onChangeAttr={this.props.handleUpdateAttr}/>
        </LayoutCard>
    }
}

function mapStateToProps(state) {
    return {
        consume: state.consume,
        geographic: state.geographic
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handleAdd: addConsumeParam,
        handleRemove: removeConsumeParam,
        handleUpdateAttr: updateAttribute,
    },dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Consume)
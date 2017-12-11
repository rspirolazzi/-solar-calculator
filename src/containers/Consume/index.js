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

import {addConsumeParam, removeConsumeParam} from '../../actions/consume'
let typingTimer
class Consume extends Component {
    constructor(props) {
        super(props)
        this.typingTimer = {}
    }

    render() {
        const {items, totals, power_factor, energy, handleAdd, handleRemove} = this.props.consume
        return <LayoutCard title="PARAMETROS DE CONSUMO Y ENERGÍA">
            <InputTable items={items} onClickAdd={(e, data)=>this.props.handleAdd(data)} onClickRemove={(e,id)=>this.props.handleRemove(id)}/>
            <AdditionalsTable {...totals}/>
            <PowerInput value={power_factor}/>
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
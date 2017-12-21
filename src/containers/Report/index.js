import React, {Component} from 'react'
import {connect} from 'react-redux'
import LayoutCard from '../../components/LayoutCard'

class Report extends Component {
    render() {
        const {battery,consume,geographic,inverter,solarPanel} = this.props
        return <LayoutCard title="REPORTE">
            
        </LayoutCard>
    }
}
const mapStateToProps = (state, props)=> {
    return {
        battery: state.battery,
        consume: state.consume,
        geographic: state.geographic,
        inverter: state.inverter,
        solarPanel: state.solarPanel,
    }
}
export default connect(mapStateToProps)(Report)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LayoutCard from '../../components/LayoutCard'
import InputTable from '../../components/SolarPanel/Table'
import Totals from '../../components/SolarPanel/Totals'
import Subheader from 'material-ui/Subheader'
import {addPanelParam, removePanelParam} from '../../actions/solarPanel'
class SolarPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastUpdate: null
        }
    }
    render() {
        const {solarPanel} = this.props;
        const {items} = solarPanel
        return <LayoutCard title="PANELES SOLARES SELECCIONADOS PARA LA INSTALACIÓN">
            <Subheader>Panel Solar</Subheader>
            <InputTable items={items} onClickAdd={(e,data)=>this.props.handleAdd(data)} onClickRemove={(e,id)=>this.props.handleRemove(id)}/>
            <Totals items={items}/>
        </LayoutCard>
    }
}
function mapStateToProps(state) {
    return {
        solarPanel: state.solarPanel
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handleAdd: addPanelParam,
        handleRemove: removePanelParam,
    },dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SolarPanel)
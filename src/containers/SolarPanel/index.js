import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LayoutCard from '../../components/LayoutCard'
import InputTable from '../../components/SolarPanel/Table'
import Totals from '../../components/SolarPanel/Totals'
import Subheader from 'material-ui/Subheader'
import {addPanelParam, removePanelParam} from '../../actions/solarPanel'
import DialogAddPanel  from '../../components/SolarPanel/DialogAddPanel'
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
            <DialogAddPanel title="Agregar Panel Solar" labelDialog="Agregar un Panel Solar" onAdd={this.props.handleAdd}/>
            <InputTable items={items} onClickRemove={(e,id)=>this.props.handleRemove(id)}/>
            <Totals items={items}/>
        </LayoutCard>
    }
}
function mapStateToProps(state) {
    return {
        solarPanel: state.solarPanel,
        consume: state.consume,
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
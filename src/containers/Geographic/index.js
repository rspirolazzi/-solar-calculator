import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LayoutCard from '../../components/LayoutCard'
import Table from '../../components/Geographic/Table'
import TextField from 'material-ui/TextField'
import {selectGeoParameter} from '../../actions/geographic'
class Geographic extends Component {
    constructor(props){
        super(props)
        this.handleOnSelectRow=this.handleOnSelectRow.bind(this)
    }
   handleOnSelectRow(selectedRows){
       this.props.selectGeoParameter(selectedRows.shift())
    }
    render() {
        const {parameters, selected, selectedIndex} = this.props.geographic
        return <LayoutCard title="PARAMETROS GEOGRAFICOS Y DE RADIACIÓN SOLAR">
            <TextField
                    name="latitud"
                    hintText="Latitud"
                    floatingLabelText="Latitud"
                    type="text"
            />
            <TextField
                    name="longitud"
                    hintText="Longitud"
                    floatingLabelText="Longitud"
                    type="text"
            />
            <br/>
            <TextField
                    name="location"
                    hintText="Location"
                    floatingLabelText="Location"
                    type="text"
            />
            <Table parameters={parameters} selected={selected} selectedIndex={selectedIndex} handleOnSelectRow={this.handleOnSelectRow}/>
            
        </LayoutCard>
    }
}
const mapStateToProps = (state, props)=> {
    const {geographic} = state
    return {
        geographic
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectGeoParameter: selectGeoParameter,
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Geographic)
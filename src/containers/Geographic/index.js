import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LayoutCard from '../../components/LayoutCard'
import Table from '../../components/Geographic/Table'
import FormLocation from './FormLocation'
import {selectGeoParameter, findLocation, selectLocation} from '../../actions/geographic'
class Geographic extends Component {
    constructor(props){
        super(props)
        this.handleOnSelectRow=this.handleOnSelectRow.bind(this)
        this.handleOnSelectRowLocation=this.handleOnSelectRowLocation.bind(this)
    }
    handleOnSelectRowLocation(selectedRows) {
        const index = selectedRows.shift(), {result} = this.props.geographic.location
        if(result[index]!==undefined){
            this.props.selectLocation(result[index], index)
        }
    }
    handleOnSelectRow(selectedRows){
        if(selectedRows.length >0){
            this.props.selectGeoParameter(selectedRows.shift())
        }
    }
    render() {
        const {parameter, location} = this.props.geographic
        return <LayoutCard show={true} title="PARAMETROS GEOGRAFICOS Y DE RADIACIÓN SOLAR">
            <FormLocation handleClick={this.props.findLocation} {...location} handleOnSelectRow={this.handleOnSelectRowLocation}/>
            <Table {...parameter} handleOnSelectRow={this.handleOnSelectRow}/>
        </LayoutCard>
    }
}
const mapStateToProps = (state)=> {
    const {geographic} = state
    return {
        geographic
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectGeoParameter: selectGeoParameter,
        findLocation: findLocation,
        selectLocation: selectLocation,
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Geographic)
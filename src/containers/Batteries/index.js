import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import LayoutCard from '../../components/LayoutCard'

import PowerOfSolarPanels from '../../components/Batteries/PowerOfSolarPanels'
import ParamsOfVoltage from '../../components/Batteries/ParamsOfVoltage'
import SolarPanelsDistribution from '../../components/Batteries/SolarPanelsDistribution'
import ListOfBatteries from '../../components/Batteries/ListOfBatteries'

import {selectVoltage, updateAttr, updateAttrBattery} from '../../actions/battery'
import {suggestVoltage} from '../../utils/formulas'

class Batteries extends Component {
    
    render() {
        const {solarPanel} = this.props
        const {battery} = this.props
        const {items} = solarPanel
        const suggest = suggestVoltage(solarPanel.items)
        const {voltage, totalBankBattery,totalOfBattery}= battery
        return <LayoutCard title="DIMENSIONAMIENTO DEL ARREGLO DE PANELES Y BANCO DE BATERÍAS">
            <PowerOfSolarPanels solarPanels={items}/>
            <ParamsOfVoltage suggest={suggest} selected={voltage} onClickSelect={this.props.selectVoltage}/>
            <SolarPanelsDistribution {...battery}/>
            <ListOfBatteries {...battery} totalBankBattery={totalBankBattery}
                                          totalOfBattery={totalOfBattery}
                                          handleOnChange={this.props.updateAttr}
                                          handleOnChangeBattery={this.props.updateAttrBattery}
                                          itemsBattery={[...battery.items]}
            />
        </LayoutCard>
    }
}
const mapStateToProps = (state)=> {
    return {
        solarPanel: state.solarPanel,
        battery: state.battery,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectVoltage: selectVoltage,
        updateAttr: updateAttr,
        updateAttrBattery:updateAttrBattery,

        //selectVoltage: (voltage)=>dispatch(selectVoltage(voltage, items)),
        //updateAttr: (totalConsumeOfYear)=>(key, value)=>dispatch(updateAttr(totalConsumeOfYear, key, value)),
        //updateAttrBattery:(items)=> (key, value)=>dispatch(updateAttrBattery(items, key, value)),
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Batteries)
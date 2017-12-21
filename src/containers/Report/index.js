import React, {Component} from 'react'
import {connect} from 'react-redux'
import LayoutCard from '../../components/LayoutCard'
import {GridList, GridTile} from 'material-ui/GridList'
import {
    SolarPanel,
    Battery,
    Batteries,

} from '../../components/Common/Icons'

let id = 0
class Report extends Component {
    render() {

        const {battery, consume, geographic, inverter, solarPanel} = this.props
        return <LayoutCard title="REPORTE">
            <SolarPanelsRender items={solarPanel.items}/>
            <BatteriesRender battery={battery}/>
        </LayoutCard>
    }
}
const SolarPanelsRender = ({items})=><div>
    <GridList cols={6} cellHeight={'auto'}>{
        items.map(item=>Array.apply(null, Array(parseInt(item.qty))).map(qty=><GridTile key={id++}>
            <SolarPanel size="small"/>
        </GridTile>))
    }</GridList></div>


const BatteriesRender = ({battery})=><div>
    <GridList cols={6} cellHeight={'auto'}>{
        Array.apply(null, Array(parseInt(battery.totalOfBattery.qty))).map(qty=><GridTile key={id++}>
            <Battery size="small"/>
        </GridTile>)
    }</GridList></div>

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
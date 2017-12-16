import React, {Component} from 'react'

import Geographic from '../Geographic'
import Consume from '../Consume'
import SolarPanel from '../SolarPanel'
import Batteries from '../Batteries'
import Inverters from '../Inverters'
import TotalCost from '../TotalCost'
import SnackBar from '../Snackbar'

class Layout extends Component {
    render() {
        return <div style={this.props.styles.container}>
            <h1>Calculo de sistema Fotovoltaico</h1>
            <h2>Beta</h2>
            <Geographic/>
            <br/>
            <Consume/>
            <br/>
            <SolarPanel/>
            <br/>
            <Batteries/>
            <br/>
            <Inverters/>
            <br/>
            <TotalCost/>
            <br/>
            <SnackBar/>
        </div>
    }
}
export default Layout
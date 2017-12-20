import React, {Component} from 'react'

import Geographic from '../Geographic'
import Consume from '../Consume'
import SolarPanel from '../SolarPanel'
import Batteries from '../Batteries'
import Inverters from '../Inverters'
import TotalCost from '../TotalCost'
import SnackBar from '../Snackbar'

import Home from '../../components/Home'

import {Switch, Route} from 'react-router-dom'

class Layout extends Component {
    render() {
        return <div style={this.props.styles.container}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/geographic" component={Geographic}/>
                <Route path="/consume" component={Consume}/>
                <Route path="/solarPanel" component={SolarPanel}/>
                <Route path="/batteries" component={Batteries}/>
                <Route path="/inverters" component={Inverters}/>
                <Route path="/totalCost" component={TotalCost}/>
            </Switch>
            <SnackBar/>
        </div>
    }
}
export default Layout
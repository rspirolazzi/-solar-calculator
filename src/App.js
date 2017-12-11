import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import {HashRouter, Route} from "react-router-dom"
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import {deepOrange500} from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar';
import Layout from './containers/Layout'
// Font
import 'typeface-roboto'
import initState from './initStates'

// Styles
const styles = {
    container: {
        textAlign: 'center',
        width:'80%',
        margin:'0 auto'
    }
}

// Theme
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
})
injectTapEventPlugin()

const store = configureStore(initState)
//const store = configureStore()
class App extends Component {
    render() {
        return <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar title="Calculo de sistema Fotovoltaico"/>
                <Layout styles={styles}/>
            </MuiThemeProvider>
        </Provider>
    }
}

export default App;

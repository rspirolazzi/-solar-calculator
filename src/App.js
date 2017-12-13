import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'

import {deepOrange500} from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar';
import Layout from './containers/Layout'
// Font
import 'typeface-roboto'
import styles from './styles'

// Theme
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
        //textColor: cyan500,
    }
})
injectTapEventPlugin()

//const store = configureStore(initState)
const store = configureStore()
class App extends Component {
    render() {
        return <Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.bg}>
                    <AppBar title="Calculo de sistema Fotovoltaico"/>
                    <Layout styles={styles}/>
                </div>
            </MuiThemeProvider>
        </Provider>
    }
}

export default App;

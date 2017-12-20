import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'

import {deepOrange500} from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar';
import Layout from './containers/Layout'
import {PersistGate} from 'redux-persist/es/integration/react'
import Loading from './components/Loading'
import NewIcon  from 'material-ui/svg-icons/content/add'
import CreateNewButton from 'material-ui/FloatingActionButton'

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {HashRouter} from 'react-router-dom'

// Font
import 'typeface-roboto'
import styles from './styles'

// Theme
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    }
})
injectTapEventPlugin()
const {store, persistor} = configureStore()
const onBeforeLift = ()=> {
    console.log('onBeforeLift')
}
const clearData = (e)=> {
    e.preventDefault()
    console.log('ClearData')
    persistor.purge(store)
    window.location.reload()
}

const MenuRight = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Nuevo"/>
    </IconMenu>
)

class App extends Component {
    render() {
        return <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<Loading show={true} />} onBeforeLift={onBeforeLift}>
                    <HashRouter>
                        <div style={styles.bg}>
                            <AppBar title="Calculo de sistema Fotovoltaico (beta)" iconElementRight={<MenuRight/>}/>
                            <Layout styles={styles}/>
                            <CreateNewButton onClick={clearData}>
                                <NewIcon/>
                            </CreateNewButton>
                        </div>
                    </HashRouter>
                </PersistGate>
            </Provider>
        </MuiThemeProvider>
    }
}

export default App;

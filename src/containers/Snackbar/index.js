import React, {Component} from 'react'
import Snackbar from 'material-ui/Snackbar'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hideMessage} from '../../actions/session'

class SnackbarSimple extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({open:(nextProps.session.message!=='')})
    }

    handleRequestClose = () => {
        this.setState({open: false,}, this.props.hideMessage())
    }

    render() {
        const {message}= this.props.session
        if(message.length===0){
            return null
        }
        return (
            <Snackbar
                    open={this.state.open}
                    message={message}
                    autoHideDuration={4000}
                    action="cerrar"
                    onActionClick={this.props.hideMessage}
                    onRequestClose={this.handleRequestClose}
                />
        )
    }
}
Snackbar.PropTypes={
    message:PropTypes.string.isRequired,
}
function mapStateToProps(state) {
    return {
        session: state.session,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideMessage: hideMessage
    },dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SnackbarSimple)
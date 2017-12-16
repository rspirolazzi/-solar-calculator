import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from 'prop-types'
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogSimple extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    open = () => {
        this.setState({open: true})
    }

    close = () => {
        this.setState({open: false})
    }

    clickClose=()=>{
        this.close()
    }
    clickSubmit=()=>{
        this.close()
    }

    getActions = ()=>[
        <FlatButton
            label="Cerrar"
            onClick={this.clickClose}
        />,
        <FlatButton
            label="Guardar"
            primary={true}
            onClick={this.clickSubmit}
        />,
    ]

    renderButtonShowModa = ()=><RaisedButton label={this.props.labelDialog} onClick={this.open}/>
    renderContentModal=()=><p>The actions in this window were passed in as an array of React objects.</p>
    renderModal=()=><Dialog title={this.props.title} actions={this.getActions()} modal={false} open={this.state.open} onRequestClose={this.close}>
        {this.renderContentModal()}
    </Dialog>
    render() {
        return <div>
            {this.renderButtonShowModa()}
            {this.renderModal()}
        </div>
    }
}
DialogSimple.propTypes = {
    labelDialog: PropTypes.string,
    title: PropTypes.string,
}
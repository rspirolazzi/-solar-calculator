import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog'
import Button from 'material-ui/FlatButton'
import {confirmable} from 'react-confirm';

class Confirmation extends Component {
    render() {
        const {
            okLabel = 'Aceptar',
            cancelLabel = 'Cancelar',
            title,
            confirmation,
            show,
            proceed,
            dismiss,
            cancel,
            muiTheme,
        } = this.props;
        return <Dialog muiTheme={muiTheme} open={show} onRequestClose={dismiss}>
                    <h4>{title}</h4>
                    <p>{confirmation}</p>
                    <div>
                        <Button onClick={cancel}>{cancelLabel}</Button>
                        <Button onClick={proceed}>{okLabel}</Button>
                    </div>
                </Dialog>
    }
}

Confirmation.propTypes = {
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    okClass: PropTypes.string,
    cancelClass: PropTypes.string,
    title: PropTypes.string,
    confirmation: PropTypes.string,
    show: PropTypes.bool,
    proceed: PropTypes.func,     // called when ok button is clicked.
    cancel: PropTypes.func,      // called when cancel button is clicked.
    dismiss: PropTypes.func,     // called when backdrop is clicked or escaped.
    enableEscape: PropTypes.bool,
}

export default confirmable(Confirmation);
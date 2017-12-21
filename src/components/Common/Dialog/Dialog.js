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
            form:this.initState(),
        }
        this.getActions=this.getActions.bind(this)
    }
    initState = ()=>({})
    resetForm=() =>{
        this.setState({form: this.initState()}, ()=>{
            if(this.refs.name){
                this.refs.name.focus()
            }
        })
    }

    clickClose=()=>{
        this.close()
        this.resetForm()
    }

    onChange=(e)=> {
        let {form} = this.state
        form[e.target.name]= e.target.value
        this.calculateValues(form)
        this.setState({form:form})
    }

    open = () => {
        this.setState({open: true})
    }

    close = () => {
        this.setState({open: false})
    }

    clickSubmit=()=>{
        this.props.onAdd(this.state.form)
        this.resetForm()
    }
    focusOnFirstElement=()=>{

    }

    getActions = ()=>[
        <FlatButton
            label="Cerrar"
            onClick={this.clickClose}
        />,
        <FlatButton
            label="Agregar"
            primary={true}
            onClick={()=>{this.clickSubmit();}}
        />,
        <FlatButton
            label="Agregar y salir"
            secondary={true}
            onClick={()=>{this.clickSubmit(); this.close()}}
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
    onAdd:PropTypes.func.isRequired,
    labelDialog: PropTypes.string,
    title: PropTypes.string,
}
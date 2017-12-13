import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton  from 'material-ui/RaisedButton'
import Loading from '../../components/Loading'

import Search from 'material-ui/svg-icons/action/search';
import {Table,TableHeader, TableHeaderColumn, TableBody, TableRow} from 'material-ui/Table'
class FormLocation extends Component{
    constructor(props){
        super(props)
        this.state={
            term:''
        }
        this.onChange=this.onChange.bind(this)
        this.submit=this.submit.bind(this)
    }
    submit(e){
        e.preventDefault()
        this.props.handleClick(this.state.term)
    }
    onChange(e){
        const {value} = e.target
        this.setState({term:value})
    }
    render(){
        return <div>
            <form onSubmit={this.submit}>
                <TextField fullWidth={true} name="term" hintText="Location" floatingLabelText="Location" value={this.state.term} onChange={this.onChange} type="text"/>
                <RaisedButton fullWidth={true} onClick={this.submit} label="Buscar" primary={true} icon={<Search />}/>
                <Loading show={this.props.isLoading}/>
            </form>
            {(this.props.result && this.props.result.length>0) ? <Table onRowSelection={this.props.handleOnSelectRow}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Ubicación</TableHeaderColumn>
                            <TableHeaderColumn>Latitud</TableHeaderColumn>
                            <TableHeaderColumn>Longitud</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                <TableBody>
                    {this.props.result.map((r,i)=><TableRow selected={i === this.props.selectedIndex} key={r.latitude+r.longitude}>
                        <TableHeaderColumn>{r.formattedAddress}</TableHeaderColumn>
                        <TableHeaderColumn>{r.latitude}</TableHeaderColumn>
                        <TableHeaderColumn>{r.longitude}</TableHeaderColumn>
                    </TableRow>)}
                </TableBody>
            </Table>:''}
        </div>
    }
}
export default FormLocation
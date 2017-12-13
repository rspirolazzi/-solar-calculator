import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import {Table,TableHeader, TableHeaderColumn, TableBody, TableRow} from 'material-ui/Table'
class FormLocation extends Component{
    constructor(props){
        super(props)
        this.state={
            term:''
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(e){
        const {value} = e.target
        this.setState({term:value})
    }
    render(){
        return <div>
            <TextField name="term" hintText="Location" floatingLabelText="Location" value={this.state.term} onChange={this.onChange} type="text"/>
            <IconButton tooltip="Buscar" onClick={()=>this.props.handleClick(this.state.term)}><Search/></IconButton>
            {this.props.isLoading?'Buscando...':''}
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
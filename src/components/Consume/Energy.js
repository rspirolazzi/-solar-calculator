import React from 'react'
import {List,ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'

const Energy = ({security_factor=0,system_efficiency=0, power_to_generate=0, cloudy_days=0, cloudy_frequent=0, extra_power_to_generate=0, total_extra_power_to_generate=0, onChangeAttr})=><div>
        <Subheader>Energía diaria a generar</Subheader>
        <TextField onChange={(e,value)=>onChangeAttr(e.target.name, value)} floatingLabelText="Factor de Seguridad (%)" hintText="Ejemplo:110%" name="security_factor" type="text" defaultValue={security_factor}/>
        <TextField onChange={(e,value)=>onChangeAttr(e.target.name, value)} floatingLabelText="Eficiencia del sistema (%)" hintText="Ejemplo:60%" name="system_efficiency" type="text" defaultValue={system_efficiency}/>
        <List>
            <ListItem>Energía a Generar <b>{power_to_generate} Wh/día</b></ListItem>
        </List>

        <Subheader>Energía extra de autonomia</Subheader>
        <TextField onChange={(e,value)=>onChangeAttr(e.target.name, value)} floatingLabelText="Maximos dias nublados" hintText="Ejemplo:3" name="cloudy_days" type="text" defaultValue={cloudy_days}/>
        <TextField onChange={(e,value)=>onChangeAttr(e.target.name, value)} floatingLabelText="Frecuencia de nubladez" hintText="Ejemplo:15" name="cloudy_frequent" type="text" defaultValue={cloudy_frequent}/>
        <List>
            <ListItem>Energía extra a generar <b>{extra_power_to_generate} Wh/día</b></ListItem>
        </List>
        <Divider/>
        <List>
            <ListItem>Energia total a generar por día <b>{total_extra_power_to_generate} Wh/día</b></ListItem>
        </List>
</div>
export default Energy
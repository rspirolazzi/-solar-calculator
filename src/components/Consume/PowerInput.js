import React from 'react'
import TextField from 'material-ui/TextField'

const PowerInput = ({value='', onChangeAttr})=><TextField
    floatingLabelText="Factor de Potencia" hintText="Ejemplo: 0,7"
    name="power_factor" type="text" value={value}
    onChange={(e,_value)=>onChangeAttr(e.target.name, _value)}
/>
export default PowerInput
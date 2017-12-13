import React from 'react'
import TextField from 'material-ui/TextField'

const PowerInput = ({value=''})=><TextField floatingLabelText="Factor de Potencia" hintText="Ejemplo: 0,7" name="power_factor" type="text" defaultValue={value}/>
export default PowerInput
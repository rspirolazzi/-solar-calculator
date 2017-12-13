import React from 'react'
import Subheader from 'material-ui/Subheader'
import {List, ListItem} from 'material-ui/List'
const InfoCharge = ({value})=><div>
    <Subheader>Regulador de carga</Subheader>
    <List>
        <ListItem>Corriente del regulador <b>{value} A</b></ListItem>
    </List>
</div>
export default InfoCharge
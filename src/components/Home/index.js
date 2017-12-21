import React from 'react'
//import {Link} from 'react-router-dom'
//import FlatButton from 'material-ui/FlatButton'
//import {blueA400} from 'material-ui/styles/colors'
import Button from 'material-ui/RaisedButton'
import {Card, CardTitle, CardHeader, CardMedia, CardText, CardActions} from 'material-ui/Card'
import GridList from 'material-ui/GridList'
import { RadiationSolar,Consume,SolarPanelHouse,Batteries,Inverters,Cost} from '../Common/Icons'

RadiationSolar
Consume
SolarPanelHouse
Batteries
Inverters
Cost


const HomeCard =({title,subtitle,href,img})=><Card>
    <CardHeader
        title={title}
    />
    <CardMedia overlay={<CardTitle title={title} subtitle={subtitle} />}>
        {img}
    </CardMedia>
    <CardActions>
        <Button primary={true} label="Ingresar" fullWidth={true} href={href} />
    </CardActions>
</Card>
const homeSections=[
    {key:1,title:"Radiación Solar",subtitle:"Parametros geograficos y de radiación solar",href:"/#geographic", img:<RadiationSolar size="medium"/>},
    {key:2,title:"Consumo y Energía",subtitle:"Parametros de consumo y energía",href:"/#consume", img:<Consume size="medium"/>},
    {key:3,title:"Paneles Solares",subtitle:"Paneles solares seleccionados para la instalación",href:"/#solarPanel", img:<SolarPanelHouse size="medium"/>},
    {key:4,title:"Baterias",subtitle:"Dimensionamiento del arreglo de paneles y banco de baterías",href:"/#batteries", img:<Batteries size="medium"/>},
    {key:5,title:"Inversor",subtitle:"Dimensionamiento del regulador de carga e inversor",href:"/#inverters", img:<Inverters size="medium"/>},
    {key:6,title:"Costo",subtitle:"Costo de inversión en equipos",href:"/#totalCost", img:<Cost size="medium"/>},
]
const Home =()=><GridList cellHeight={'auto'} cols={3}>
    {homeSections.map(section=><HomeCard key={section.key} {...section}/>)}
</GridList>
export default Home
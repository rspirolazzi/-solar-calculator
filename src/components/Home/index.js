import React from 'react'
import {Link} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import {Card, CardTitle, CardHeader, CardMedia, CardText, CardActions} from 'material-ui/Card'
import GridList from 'material-ui/GridList'
const Home =()=><GridList cellHeight={'auto'} cols={3}>
    <Card>
        <CardHeader
            title="RADIACIÓN SOLAR"
            subtitle="PARAMETROS GEOGRAFICOS Y DE RADIACIÓN SOLAR"
        />
        <CardMedia overlay={<CardTitle title="RADIACIÓN SOLAR" subtitle="PARAMETROS GEOGRAFICOS Y DE RADIACIÓN SOLAR" />}>
            <img src="http://www.blogodisea.com/wp-content/uploads/2011/03/radiacion-solar-radiactividad.jpg" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Ingresar" href="/#geographic" />
        </CardActions>
    </Card>
    <Card>
        <CardHeader
            title="CONSUMO Y ENERGÍA"
            subtitle="PARAMETROS DE CONSUMO Y ENERGÍA"
        />
        <CardMedia overlay={<CardTitle title="CONSUMO Y ENERGÍA" subtitle="PARAMETROS DE CONSUMO Y ENERGÍA" />}>
            <img src="http://www.serviciostecnicosjunkers.com/wp-content/uploads/2013/04/consumo-energia-caldera.jpg" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Ingresar" href="/#consume" />
        </CardActions>
    </Card>
    <Card>
        <CardHeader
            title="PANELES SOLARES"
            subtitle="PANELES SOLARES SELECCIONADOS PARA LA INSTALACIÓN"
        />
        <CardMedia overlay={<CardTitle title="PANELES SOLARES" subtitle="PANELES SOLARES SELECCIONADOS PARA LA INSTALACIÓN" />}>
            <img src="https://erenovable.com/wp-content/uploads/2011/01/paneles-solares-e1362599154270.jpg" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Ingresar" href="/#solarPanel" />
        </CardActions>
    </Card>
    <Card>
        <CardHeader
            title="BATERIAS"
            subtitle="DIMENSIONAMIENTO DEL ARREGLO DE PANELES Y BANCO DE BATERÍAS"
        />
        <CardMedia overlay={<CardTitle title="BATERIAS" subtitle="DIMENSIONAMIENTO DEL ARREGLO DE PANELES Y BANCO DE BATERÍAS" />}>
            <img src="https://www.distribucionessolares.es/EXT43001892/IMAGENES/ART0000084500139.JPG" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Ingresar" href="/#batteries" />
        </CardActions>
    </Card>
    <Card>
        <CardHeader
            title="INVERSOR"
            subtitle="DIMENSIONAMIENTO DEL REGULADOR DE CARGA E INVERSOR"
        />
        <CardMedia overlay={<CardTitle title="INVERSOR" subtitle="DIMENSIONAMIENTO DEL REGULADOR DE CARGA E INVERSOR" />}>
            <img src="https://images.ssstatic.com/inversor-solar-6000w-onda-senoidal-pura-7719281z0-00000067.jpg" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Ingresar" href="/#inverters" />
        </CardActions>
    </Card>
    <Card>
        <CardHeader
            title="COSTO"
            subtitle="COSTO DE INVERSIÓN EN EQUIPOS"
        />
        <CardMedia overlay={<CardTitle title="COSTO" subtitle="COSTO DE INVERSIÓN EN EQUIPOS" />}>
            <img src="http://conceptodefinicion.de/wp-content/uploads/2016/07/Inversi%C3%B3n_en_Futuros_y_Opciones2-250x130.jpg" />
        </CardMedia>
        <CardActions>
            <FlatButton label="Ingresar" href="/#totalCost" />
        </CardActions>
    </Card>

</GridList>
export default Home
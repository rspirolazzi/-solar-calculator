import React from 'react'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
const LayoutCard = ({show=false, title, children})=>{
    if(show){
        window.scrollTo(0,0)
        return <div>
            <h1>{title}</h1>
            <Paper zDepth={1}>
            <Card expanded>
                <CardText expandable={true}>
                    {children}
                </CardText>
                <CardActions style={{textAlign:'right'}}>
                    <FlatButton label="Volver" href="/#" />
                </CardActions>
            </Card>
        </Paper>
        </div>
    }
    return null
}
export default LayoutCard
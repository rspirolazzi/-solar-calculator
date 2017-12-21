import React from 'react'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import Paper from 'material-ui/Paper'
//import Button from 'material-ui/FlatButton'
import Button from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'
import {grey200} from 'material-ui/styles/colors'
const LayoutCard = ({title, children})=> {
    window.scrollTo(0, 0)
    return <div>
        <Paper zDepth={1}>
            <Subheader>
                <h2>{title}</h2>
            </Subheader>
            <Card expanded>
                <CardText expandable={true}>
                    {children}
                </CardText>
                <CardActions style={{textAlign:'right'}}>
                    <Button backgroundColor={grey200} label="Volver" href="/#"/>
                </CardActions>
            </Card>
        </Paper>
    </div>
}
export default LayoutCard
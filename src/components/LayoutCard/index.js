import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Paper from 'material-ui/Paper'

const LayoutCard = ({title, children})=><Paper zDepth={1}>
    <Card expanded>
        <CardHeader
            title={title}
            actAsExpander={true}
            showExpandableButton={true}
        />
        <CardText expandable={true}>
            {children}
        </CardText>
    </Card>
</Paper>
export default LayoutCard
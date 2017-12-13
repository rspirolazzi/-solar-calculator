import React from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import styles from '../../styles'
const Loading =({show=false})=>{
    if(show){
        return <RefreshIndicator
            size={40}
            left={0}
            top={0}
            status="loading"
            style={styles.refresh}
        />
    }
    return null
}
export default Loading
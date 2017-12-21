import React from 'react'
import PropTypes from 'prop-types'
const sizes = ['', 'small', 'medium', 'large']
const path = '/img'

const Img =({img, size=''})=>{
    let src, params=[]
    params.push(path)
    if(size) {
        params.push(size)
    }
    params.push(img)
    src = params.join('/')
    return <img src={src}/>
}
Img.propTypes={
    size:PropTypes.oneOf(sizes),
}
export const RadiationSolar =(props)=><Img {...props} img={`sunbathing.png`}/>
export const Consume =(props)=><Img {...props} img={`mobile-and-laptop-charging-with-solar-panel.png`}/>
export const SolaPanels =(props)=><Img {...props} img={`house-solar-panel.png`}/>
export const Batteries =(props)=><Img {...props} img={`light-connected-to-battery-and-solar-panel.png`}/>
export const Inverters =(props)=><Img {...props} img={`solar-energy.png`}/>
export const Cost =(props)=><Img {...props} img={`saving-a-dollar-coin.png`}/>

export default Img
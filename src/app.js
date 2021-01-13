import React,{useRef, useEffect, useState} from 'react'
import './index.css'
//import all the images
import small from './assets/flamingo1x.jpg'
import medium from './assets/flamingo2x.jpg'
import large from './assets/flamingo3x.jpg'
import extraLarge from './assets/flamingo4x.jpg'
import defaultImage from './assets/flamingo-fallback.jpg'



const app = ()=>{

//img tag has srcSet attribute which takes set of images to set to src of image based on the size of its device resolution
//picture tag can set src of image to display required image with media attribute to set conditions based on resolution
return (<div>
        <div>Image optimisation with srcSet and image tag</div>
       <img srcSet={`${small} 1006w, ${medium} 2013w, ${large} 3019w,${extraLarge} 4025w`} src ={defaultImage} alt='sample image' />
        <div>Image optimisation with srcSet and picture tag</div>
        <picture>
            <source media="(min-width: 4025px)" src={extraLarge}/>
            <source media="(max-width: 2013px)" src={small}/>
            <source media="(min-width: 2013px) and (max-width: 3019px)" src={medium}/>
            <source media="(min-width: 3019px) and (max-width: 4025px)" src={large}/>

            <img src={defaultImage} alt='Sample Image' styleName='sample-image'/>
        </picture>
    </div>)
}


export default app 
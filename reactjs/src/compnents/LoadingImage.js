import React from 'react';
import '../App.css'

const LoadingImage = (props) =>{
    return(
        <div>
            <img src={props.source} id="loadingImage" alt="Loading..." />
        </div>
    )
}

export default LoadingImage;
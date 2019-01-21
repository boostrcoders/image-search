import React from 'react';
import '../App.css'

const Image = props => {
    return(
        <div>
            <img key={props.image.id} src={props.image.previewURL} alt="" />
        </div>
    )
}

export default Image;
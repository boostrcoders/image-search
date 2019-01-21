import React from 'react';
import Image from './Image'
import '../App.css'


const ResultImages = props =>{
    return(
        <section className="images">
          {props.images.map(image => {
            return <Image image={image}/>
          })}
        </section>
    )
}

export default ResultImages;
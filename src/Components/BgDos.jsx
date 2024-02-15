import React from 'react';
import imgfiesta2 from '../img-fondo/imgfiesta2.jpg';


const BackGroundDos=()=>{

    return(
        <div className="bg" style={{ 
            backgroundImage: `url(${imgfiesta2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '120vh', // 100% del viewport height 
        }}>
            
        </div>
    )
}

export default BackGroundDos
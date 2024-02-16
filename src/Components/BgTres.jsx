import React from 'react';
import marco_parque from '../img-fondo/marco_parque.jpg';



const BackGroundTres=()=>{

    return(
        <div className="bg" style={{ 
            backgroundImage: `url(${marco_parque})`,
            //backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '200vh', // 100% del viewport height 
            //width: '250vh', // 100% del viewport height 
            }}> 
        </div>
    )
}

export default BackGroundTres
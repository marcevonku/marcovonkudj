import React from 'react';
import MuroUno from '../img-fondo/MuroUno.jpg';
import LogoBody from './LogoBody';
import ButtonPlay from './ButtonPlay';


const BackGround=()=>{

    return(
        <div className="bg" style={{ 
            backgroundImage: `url(${MuroUno})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '125vh', // 100% del viewport height 
            }}>
            <LogoBody/>
            <ButtonPlay/>

 
        </div>
    )
}

export default BackGround
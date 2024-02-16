import React from 'react';
import marco_outfit_cuatro from '../img-fondo/marco_outfit_cuatro.jpg';
import useSound from 'use-sound';
import elcirco from '../aud/elcirco.mp3';
import LogoBodyUno from './LogoBodyUno';
import ButtonPlay from './ButtonPlay';


const BackGroundUno=()=>{

    const [playSound] = useSound(elcirco);
    return(
        <div className="bg" style={{ 
            backgroundImage: `url(${marco_outfit_cuatro})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '160vh', // 100% del viewport height 
        }}>
            <LogoBodyUno/>
            <ButtonPlay />
        </div>
    )
}

export default BackGroundUno
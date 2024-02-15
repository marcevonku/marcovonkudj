import React from 'react';
import imgfiesta2 from '../img-fondo/imgfiesta2.jpg';
import LogoBody from './LogoBody';
import useSound from 'use-sound';
import elcirco from '../aud/elcirco.mp3';
import LogoBodyUno from './LogoBodyUno';


const BackGroundDos=()=>{

    const [playSound] = useSound(elcirco);
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
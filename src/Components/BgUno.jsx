import React from 'react';
import marco_outfit_cuatro from '../img-fondo/marco_outfit_cuatro.jpg';
import useSound from 'use-sound';
import elcirco from '../aud/elcirco.mp3';
import LogoBodyUno from './LogoBodyUno';


const BackGroundUno=()=>{

    const [playSound] = useSound(elcirco);
    return(
        <div className="bg" style={{ 
            backgroundImage: `url(${marco_outfit_cuatro})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '120vh', // 100% del viewport height 
        }}>
            <LogoBodyUno/>

             <div style={{ 
                marginTop: '10px',
                textAlign:  'center'
                }}>
                <button 
                className="btn btn-danger"
                onClick={playSound} 
                >--PLAY SOUND--</button>
            </div> 
        </div>
    )
}

export default BackGroundUno
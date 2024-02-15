import React from 'react';
import MuroUno from '../img-fondo/MuroUno.jpg';
import LogoBody from './LogoBody';
import useSound from 'use-sound';
import elcirco from '../aud/elcirco.mp3';


const BackGround=()=>{

    const [playSound] = useSound(elcirco);
    return(
        <div className="bg" style={{ 
            backgroundImage: `url(${MuroUno})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '125vh', // 100% del viewport height 
        }}>
            <LogoBody/>

            <div style={{ 
                marginTop: '1px',
                textAlign:  'center'
                }}>
                <button 
                className="btn btn-danger"
                onClick={playSound} 
                >--PLAY SOUND I></button>
            </div>
        </div>
    )
}

export default BackGround
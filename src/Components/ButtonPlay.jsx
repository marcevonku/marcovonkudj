import React from 'react';
import useSound from 'use-sound';
import elcirco from '../aud/elcirco.mp3';

const ButtonPlay=()=>{

    const [playSound] = useSound(elcirco);
    return(
        <>
            <div style={{ 
                margin: '3%',
                textAlign:  'center'
                }}>
                    <button 
                        type="button" 
                        class="btn btn-success"
                        onClick={playSound}
                        style={{
                            backgroundColor: "purple",
                            border: "4px solid black",
                        }}
                        >WELCOME TO DANCE PARTY NIGHT TRACK ONE</button>
            </div> 
        </>
    )
}

export default ButtonPlay
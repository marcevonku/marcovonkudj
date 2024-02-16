import React from 'react';
import useSound from 'use-sound';
import elcirco from '../aud/elcirco.mp3';

const ButtonPlay=()=>{

    const [playSound] = useSound(elcirco);
    return(
        <>
            <div style={{ 
                marginTop: '10px',
                textAlign:  'center'
                }}>
                    <button 
                        type="button" 
                        class="btn btn-success"
                        onClick={playSound}
                        style={{
                            backgroundColor: "purple",
                            border: "4px solid black",
                            //border: "2px solid whit",
                        }}
                        >WELCOME TO DANCE PARTY NIGHT TRACK ONE</button>
            </div> 
        </>
    )
}

export default ButtonPlay
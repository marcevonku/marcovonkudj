import React from 'react';
import useSound from 'use-sound';
import elcirco from '../aud/elcirco.mp3';
import Rizzla from '../aud/Rizzla.mp3';

function ButtonPlay(props) {
  let tema;
  if (props.title === 1) {
    tema = elcirco;
  } else if (props.title === 2) {
    tema = Rizzla;
  }

  const [playSound] = useSound(tema);

  return (
    <>
      <div
        style={{
          margin: '1%',
          textAlign: 'center',
        }}
      >
        <button
          type="button"
          className="btn btn-success"
          onClick={playSound}
          style={{
            backgroundColor: 'purple',
            border: '4px solid black',
          }}
        >
          WELCOME TO DANCE PARTY NIGHT TRACK ONE
        </button>
      </div>
    </>
  );
}

export default ButtonPlay;

import React from "react";
import Player from '@madzadev/audio-player'
import elcirco from '../aud/elcirco.mp3'

const tracks = [
    {
      url: elcirco,
      title: 'el circo',
      tags: ['house']
    }
  ]

const Player1 = () =>{
    return(
        <div>
            <Player
                trackList={tracks}
                includeTags={false}
                includeSearch={false}
                showPlaylist={false}
            />
        </div>
    ); 
}

export default Player1;
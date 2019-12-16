import React from 'react';
import Sound from 'react-sound';
import blaze from '../assets/blaze.mp3'

export default function Blaze(){
    return(
        <Sound
            url={blaze}
            playStatus={Sound.status.PLAYING}
            loop={true}
            allow="autoplay"
        />
    );
}
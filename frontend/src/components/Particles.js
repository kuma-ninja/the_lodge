import React from 'react';
import ParticlesJS from 'react-particles-js';
import config from '../assets/particle';



export default function Particles(){
    return(
        <ParticlesJS
            params={config}
        />
    );
}        
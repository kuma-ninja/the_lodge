import React from 'react';
import Particles from 'react-particles-js';
import config from './assets/particle';
import blaze from './assets/blaze.mp3'
import './App.css';

import Sound from 'react-sound';

//import Home from './pages/Home';

function App() {
    return ([
        <Particles
            params={config}
        />,
        <Sound
            url={blaze}
            playStatus={Sound.status.PLAYING}
            loop={true}
            // onLoading={Sound.handleSongLoading}
            // onPlaying={Sound.handleSongPlaying}
            // onFinishedPlaying={Sound.status.PLAYING}
        />]
    );
}

export default App;
import React from 'react';
import Particles from './components/Particles';
import Blaze from './components/Sound'
import Routes from './routes'
import './App.css';

//import Home from './pages/Home';

function App() {
    return ([
        <Routes/>,
        <Particles/>,
        <Blaze/>
        ]
    );
}

export default App;
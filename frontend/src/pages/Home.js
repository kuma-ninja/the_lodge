import React from 'react';
// import Particles from '../components/Particles';
import Blaze from '../components/Sound';
import '../styles/Home.css';


export default function Home(){
    return([
        // <Particles key='particles' />,
        <Blaze key='sound' />,
        <div className="container">
            <div className="main_menu">
                <a href='/tales' key='tales_link'>Tales</a>
                <a href='/tellHistory' key='tell_link'>Tell a history</a>
            </div>
            <div className="carousel">
            </div>
        </div>
    ]);
}
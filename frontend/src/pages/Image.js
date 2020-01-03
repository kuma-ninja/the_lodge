// import React, {useEffect, useState} from 'react';
import React from 'react';
import api from '../services/api';

export default function ImageRender(props){
    let path;
    if (props.location  === undefined) {
        path = props.pathname;
    } else {
        path = props.location.pathname;
    }
    path = path.replace('public', 'images')
    const {baseURL} = api.defaults;
    // const [image, setImage] = useState('');
    // useEffect(()=>{
    //     async function getImage(path){
    //         const resp = await api.get(path);
    //         setImage(resp);
    //     }
    //     getImage(path);
    // },[path]);
    return (
        <img src={baseURL+path} alt={path}/>
    );
}
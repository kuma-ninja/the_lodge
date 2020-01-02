// import React, {useEffect, useState} from 'react';
import React from 'react';
import api from '../services/api';

export default function ImageRender(props){
    let path = props.location.pathname || props.pathname;
    path = path.replace('public', 'images')
    const {baseURL} = api.defaults;
    console.log(path)
    // const [image, setImage] = useState('');
    // useEffect(()=>{
    //     async function getImage(path){
    //         const resp = await api.get(path);
    //         setImage(resp);
    //     }
    //     getImage(path);
    // },[path]);
    return (
        // <Image source={{uri: `data:image/gif;base64,${Image}`}} />
        <img src={baseURL+path} alt={path}/>
    );
}
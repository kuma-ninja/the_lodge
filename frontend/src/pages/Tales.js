import React from 'react'
import api from '../services/api'

export default function Tales(){
    async function getTales(){
        const response = await api.get('/tales');
        console.log(response);
    }
    getTales();
    return(
        <h1>oi</h1>
    );

}

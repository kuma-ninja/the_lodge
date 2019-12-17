import React, {useEffect, useState} from 'react';
import api from '../services/api';

export default function Tales(){
    const [tale, setTale] = useState('');
    useEffect(()=>{
        async function getTales(id){
            const { data } = await api.get('/tale?id='+id);
            setTale(data.tale[0]);
        }
        getTales('5df9262de1c9b63e276efcc2');
    },[])
    return(
        <div className='tale_content'>
            <img className='content_img1' src={tale.image1} alt={tale.image1}/>
            <div className='content_text'>
                <span className='tale_text'>
                    <strong>{tale.title}</strong>
                    {tale.description}
                </span>
                <img className='content_img2' src={tale.image2} alt={tale.image1}/>
            </div>
        </div>
    );
}
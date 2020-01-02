import React, {useEffect, useState} from 'react';
import api from '../services/api';

export default function Tale({location}){
    const {id} = location.state;
    const {baseURL} = api.defaults;
    const [tale, setTale] = useState('');
    useEffect(()=>{
        async function getTale(id){
            const { data } = await api.get('/tale?id='+id);
            setTale(data.tale[0]);
        }
        getTale(id);
    },[id])
    return(
        <div className='tale_content'>
            <img className='content_img1' src={baseURL+'/images/'+tale.image1} alt={baseURL+'/images/'+tale.image1}/>
            <div className='content_text'>
                <span className='tale_text'>
                    <strong>{tale.title}</strong>
                    {tale.description}
                </span>
                {/* <img className='content_img2' src={tale.image2} alt={tale.image2}/> */}
                <img className='content_img2' src={'/public/'+tale.image2} alt={baseURL+'/images/'+tale.image2}/>
            </div>
        </div>
    );
}
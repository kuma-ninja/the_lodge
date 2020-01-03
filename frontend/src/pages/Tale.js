import React, {useEffect, useState} from 'react';
import api from '../services/api';
import ImageRender from './Image';

export default function Tale({location}){
    let tale_id;
    if(location.state === undefined){
        tale_id = '5e0f3b4073aa7f40e2ecfd53';
    } else {
        const {id} = location.state;
        tale_id = id;
    }
    const [tale, setTale] = useState('');
    useEffect(()=>{
        async function getTale(tale_id){
            const { data } = await api.get('/tale?id='+tale_id);
            setTale(data.tale[0]);
        }
        getTale(tale_id);
    },[tale_id])
    return(
        <div className='tale_content'>
            <ImageRender pathname={'/public/'+tale.image2}/>
            <div className='content_text'>
                <span className='tale_text'>
                    <strong>{tale.title}</strong>
                    {tale.description}
                </span>
                <ImageRender pathname={'/public/'+tale.image2}/>
            </div>
        </div>
    );
}
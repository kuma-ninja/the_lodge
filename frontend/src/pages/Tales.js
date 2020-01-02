import React, {useEffect, useState} from 'react';
import ImageRender from './Image';
import api from '../services/api'


export default function Tales({history}){
    const [tales, setTales] = useState('');
    useEffect(()=>{
        async function getTales(id){

            const {data} = await api.get('/tales');
            setTales(data.tales);
        }
        getTales();
    },[]);
    const linkPage = id =>{
        history.push('/tale', {id: id});
    };
    return(
        <div className="main-container">
            { tales.length > 0 ? (
                tales.map(tale => (
                    <div key={tale._id}>
                        <ImageRender pathname={'public'+tale.image1}/>
                        {/* <img className='content_img1' src={'/public/'+tale.image1} alt={'/public/'+tale.image1}/> */}
                        <strong onClick={()=>linkPage(tale._id)}>{tale.title}</strong>
                    </div>
                ))
            ) : (
                <div className="empty"> No more tales</div>
            ) }
        </div>
    );
}

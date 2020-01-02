import React, {useState} from 'react';
import api from '../services/api';


export default function TellHistory({history}){
    const [form, setState] = useState({title:'', 
        description:'', image1:'', image2:''});
    const [images, setImages] = useState({
        image1:'',
        image2:''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        Object.keys(images).map(async(key, index) => {
            const response_image = await api.post('/uploadImage', images[key]);
            console.log(response_image);
        })
        const response = await api.post('/tellHistory', form);
        const { _id } = response.data;
        history.push('/tale', {id: _id});
    };
    
    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const updateFileName = e => {
        const { name } = e.target.files[0];
        const field_name = e.target.name;
        setState({
            ...form,
            [field_name]: name
        });
    };
    
    const getBase64 = (reader, myFile) => {
        return new Promise((resolve, reject) => {
            reader.onload = () => {resolve(reader.result)}
            reader.readAsDataURL(myFile);
        });
    };
    
    async function updateFileData(e) {
        const field_name = e.target.name;
        const myFile = e.target.files[0];
        const reader = new FileReader();
        const my_data = await getBase64(reader, myFile);
        setImages({
            ...images,
            [field_name]: {image_name: myFile.name,
                image_data: my_data}
        });
    };
        
    const updateFile = e =>{
        e.persist();
        updateFileName(e);
        updateFileData(e);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Titulo"
                    value={form.title}
                    name='title'
                    onChange={updateField}
                />
                <input
                    placeholder="Descrição"
                    value={form.description}
                    name='description'
                    onChange={updateField}
                />
                <input
                    placeholder="Imagem 1"
                    name='image1'
                    type='file'
                    onChange={updateFile}
                />
                <input
                    placeholder="Imagem 2"
                    name='image2'
                    type='file'
                    onChange={updateFile}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
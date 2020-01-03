const express = require('express');
const TaleController = require('./controllers/TaleController');
const ImageController = require('./controllers/ImageController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});

routes.post('/login', (req, res) => {
    setTimeout(()=>{
        res.json({message: 'ok'});
    }, 5000);
});

routes.get('/tales', TaleController.getTales);
routes.post('/tellHistory', TaleController.store);
routes.get('/tale?*', TaleController.getTale);
routes.post('/uploadImage', ImageController.store);
routes.get('/images/*', ImageController.getImage);
routes.get('/images', ImageController.getImages);

module.exports = routes;
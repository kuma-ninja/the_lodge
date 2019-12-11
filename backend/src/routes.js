const express = require('express');
const TaleController = require('./controllers/TaleController');

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

module.exports = routes;
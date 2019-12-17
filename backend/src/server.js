const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors')

const server = express();
mongoose.connect('mongodb+srv://{user}:{pass}@cluster0-oljkb.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
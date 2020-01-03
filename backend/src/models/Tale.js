const { Schema, model } = require('mongoose');

const TaleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image1: { 
        type: String,
        required: true,
    },
    image2: { 
        type: String,
        required: true, 
    }
}, {
    timestamp: true,
});

module.exports = model('Tale', TaleSchema);
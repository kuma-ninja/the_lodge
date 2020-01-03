const { Schema, model } = require('mongoose');

const ImageSchema = new Schema({
    image_name: { 
        type: String,
        required: true,
    },
    image_data: { 
        data: Buffer, 
        type: String,
        required: true, 
    }
});

module.exports = model('Image', ImageSchema);
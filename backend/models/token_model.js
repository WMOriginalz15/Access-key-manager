const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    name: {
        type: String,
        required: true,
        length: 100,
        unique: true
    },
    procurement: {
        type: String,
        required: true,
        length: 100
    },
    expiryDate: {
        type: String,
        required: true,
        length: 100
    }
});

const Token = mongoose.model('token', tokenSchema);

module.exports = Token;
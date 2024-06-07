const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    name: {
        type: String,
        required: true,
        length: 100
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

const Token = mongoose.model('users', tokenSchema);

module.exports = Token;
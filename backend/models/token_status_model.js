const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenStatusSchema = new Schema({
    isExpired: {
        type: Boolean,
        required: true
    },
    isRevoked: {
        type: Boolean,
        required: true
    },
    isActive: {
        type: String,
        required: true
    }
});

const Status = mongoose.model('token_about', tokenStatusSchema);

module.exports = Status;
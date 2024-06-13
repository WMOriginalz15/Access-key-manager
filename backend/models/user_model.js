const mongoose = require('mongoose');
const {isEmail} = require('validator')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please enter an email address"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum password length is 6 characters"]
    }
}, {timestamps: true});

userSchema.pre('save', function (next) {
    //password hashing with salt
    
    next();
})

//method to login user
// userSchema.statics.login = async function (email, password){
//     const user = await this.findOne({email});
//     if (user) {
         
//     }
//     throw Error('Incorret email and password')
// }

const User = mongoose.model('user', userSchema);

module.exports = User;
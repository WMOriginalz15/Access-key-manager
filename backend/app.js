const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user_model')


const app = express();

//setting ejs
app.set('view engine', 'ejs');

//adding static files
app.use(express.static('public'));

//landing page served
app.get('/', (req, res) => {
    res.render('index.ejs')
})


 // trials of the model 
 app.get("/add-users" , (req, res)=>{
    const user = new User({
        name: "Lotsu Daniel",
        email: "example@google.com",
        password: "123456",
        role: "School IT Personnel"
    });

    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
 })





const dbURI = 'mongodb+srv://danielajayi:danielajayi@access-key-management.lpymepu.mongodb.net/?retryWrites=true&w=majority&appName=Access-key-management'
mongoose.connect(dbURI).then(
    (result)=> app.listen(3000)
).catch((error) => console.log(error))


app.get('/', (req, res) => {
    res.send('Hello World!')
});

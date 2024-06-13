const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user_model')
const authRoutes = require('./routes/auth_routes')
const cookieParser = require('cookie-parser')


const app = express();

//setting ejs
app.set('view engine', 'ejs');

//adding static middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

//All pages navigations
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.use(authRoutes)

app.get('/admin', (req, res) => {
    res.render('admin.ejs')
})

app.get('/personnel', (req, res) => {
    res.render('it_personnel_home.ejs')
})

 // trials of the model 
 app.get("/signup" , (req, res)=>{
    const user = new User({
        email: "example@google.com",
        password: "123456"
    });

    user.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
 })

// database connection
const dbURI = 'mongodb+srv://danielajayi:danielajayi@access-key.lpymepu.mongodb.net/access-key?retryWrites=true&w=majority&appName=Access-key-management'
mongoose.connect(dbURI).then(
    (result)=> app.listen(3000)
    

).catch((error) => console.log(error))


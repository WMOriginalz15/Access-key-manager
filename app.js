const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'access_key_management'
})

db.connect((error) => {
    if (error) {
        console.log(error);
        
    }
    else{
        console.log("MySQL Connected.....");
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
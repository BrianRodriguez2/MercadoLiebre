const express = require('express')
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.listen(3000, function(){
    console.log('Servidor Up')
})
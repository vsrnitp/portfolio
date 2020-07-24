var express = require('express');
var path = require('path');
var app = express();

//app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));
var platform = process.platform;

if(platform=="win32"||platform=="darwin"||platform=="linux"){
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/portfolio.html'));
});
}
else{
    app.get('/m',(req,res)=>{
        res.send('This website is not yet optimized for viewing in Mobile Devices! Check back later.');
    })
}

const port = process.env.PORT||8080;

app.listen(port, ()=>{console.log('Server up and running!')})
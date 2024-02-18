const express = require('express');
const cors = require('cors');
const request = require('request');



const app = express();
app.use(cors());

app.get('', (req, res) => {
    request.get({url:'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=838ddf843808dba13fe6fbb7ccdc11fe&page=1&primary_release_date.gte=2024-02-01&primary_release_date.lte=2024-02-10'}, (error, response)=>{
        res.send(response)
    });
});

app.listen(4700, ()=> {
    console.log('Server is up');
});
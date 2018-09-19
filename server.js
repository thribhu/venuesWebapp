


//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const config = require('./server/config');
const api = require('./server/routes/api');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ngVenu'));

app.use('/api', api);

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/ngVenu/index.html'));
});



    var server = app.listen(process.env.PORT || 8080, function () {
      var port = server.address().port;
      console.log("App now running on port", port);

  });
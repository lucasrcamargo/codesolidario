const express = require('express');
const path = require('path');
var http = require('http');

const app = express();


// Serve static files....
app.use(express.static(__dirname + '/dist/front'));
app.use(require('prerender-node'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/front/index.html'));
});



// default Heroku PORT
app.listen(process.env.PORT || 3000);
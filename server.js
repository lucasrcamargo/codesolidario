const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMessage = require('./configMessage');
const conn = require('./connect');

const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/front'));
app.use(bodyParser.json());
app.use(cors());

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/front/index.html'));
});

app.post('/ideias', (req,res)=>{
  const body = req.body;
  conn.query('INSERT into ideias set ?', body, (err) => {
    if (err) {
       throw error;
       
    }
    else {
      response.status(201).send("ideia cadastrada");
    }
});
  
});


// default Heroku PORT
app.listen(process.env.PORT || 3000);
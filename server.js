// server.js
// where the node app starts

var express = require('express');
var cors = require('cors');

var app = express();
var urlstr = '';
  
// middleware stack
// app.use(cors()); not necessary
app.use(express.static('public'));

// exception case for chrome's aggressive favicon-ing
app.get('/favicon.ico', function(req, res) {
  res.status(204);
});

app.get('/url', function(req, res) {
  res.send(urlstr);
});

app.get('/*', function(req, res) {
  urlstr = req.path; // req.url
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT);

/* #NOTES
Requests: from client to server
Response: from server to client

order DOES matter, and so does net neutrality!

Go with God, John G.
*/

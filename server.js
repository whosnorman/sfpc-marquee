var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var cors = require('cors');
var fs = require('fs');
var path = require('path');

// set up CORS and express
app.express = express;

app.use(cors());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// allow us to server static js file
app.use('/public', express.static(path.join(__dirname, 'public')))

// create route to return json
app.get('/blogs', function(req, res) {
  // read in file
  fs.readFile('blogs.json', 'utf8', function (err, data) {
    if (err) throw err;
    let obj = JSON.parse(data);

    // send json object as a response to the GET request
    res.send(obj);
  });
});

// start up our server on port 5000
var port = Number(process.env.PORT || 5000);
server.listen(port, function() {
  console.log("Listenin\' on " + port);
});

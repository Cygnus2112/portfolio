var express = require('express');
var app = express();
var path = require("path");

var port = process.env.PORT || 8000;

app.use('/', express.static( __dirname + '/../build' ));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, function(){
	console.log('listening on port ' + port);
});

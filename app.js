var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use('/js', express.static(__dirname + '/js'));
// app.use('/node_modules', express.static(__dirname + '/node_modules'));
// app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        "root": __dirname
    });
});

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var server = app.listen(3007, 'localhost', function () {
    var serverAddr = server.address().address;
    var serverPort = server.address().port;

    console.log('BitChat listening at %s:%s', serverAddr, serverPort);
});
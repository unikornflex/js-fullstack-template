
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path')
    mongo = require('mongodb'),
    monk = require('monk');

var app = express(),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

var db = monk('localhost/yiking');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// serve static
app.get('/', routes.index(db));

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

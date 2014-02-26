'use strict';

/* answers */
var f1 = {country: 'USA', flag:'us'};
var f2 = {country: 'Canada', flag:'ca'};
var f3 = {country: 'Russia', flag:'ru'};
var f4 = {country: 'Italy', flag:'it'};
var f5 = {country: 'France', flag:'fr'};
var f6 = {country: '', flag:'al'};
var f7 = {country: '', flag:'am'};
var f8 = {country: '', flag:'an'};
var f9 = {country: '', flag:'ao'};
var f10 = {country: '', flag:'ar'};
var f11 = {country: '', flag:'as'};
var f12 = {country: '', flag:'at'};
var f13 = {country: '', flag:'au'};
var f14 = {country: '', flag:'aw'};
var f15 = {country: '', flag:'az'};
var f16 = {country: '', flag:'ba'};
var f17 = {country: '', flag:'bb'};
var f18 = {country: '', flag:'bd'};
var f19 = {country: '', flag:'be'};
var f20 = {country: '', flag:'bf'};
var f21 = {country: '', flag:'bg'};
var f22 = {country: '', flag:'bh'};
var f23 = {country: '', flag:'bi'};
var f24 = {country: '', flag:'bj'};
var f25 = {country: '', flag:'bm'};
var f26 = {country: '', flag:'bn'};
var f27 = {country: '', flag:'bo'};
var f28 = {country: '', flag:'br'};
var f29 = {country: '', flag:'bs'};
var f30 = {country: '', flag:'bt'};
var f31 = {country: '', flag:'bv'};
var f32 = {country: '', flag:'bw'};
var f33 = {country: '', flag:'by'};
var f34 = {country: '', flag:'bz'};

global.flags = [f1, f2, f3, f4, f5];
/* end answers */

var dbname = process.env.DBNAME;
var port = process.env.PORT || 4000;

var express = require('express');
var app = express();
var less = require('express-less');
var RedisStore = require('connect-redis')(express);
var initMongo = require('./lib/init-mongo');
var initRoutes = require('./lib/init-routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

/* --- pipeline begins */
app.use(initMongo.connect);
app.use(initRoutes);
app.use(express.logger(':remote-addr -> :method :url [:status]'));
app.use(express.favicon());
app.use(express.static(__dirname + '/static'));
app.use('/less', less(__dirname + '/less'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
  store : new RedisStore({host: 'localhost', port: 6379}),
  secret: 'change-this-to-a-super-secret-message',
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));
app.use(app.router);
/* --- pipeline ends   */

var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Database: ' + dbname);
});

module.exports = app;


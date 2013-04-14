
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
  
server.listen(8086);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'poop' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});  
  

  
var app = module.exports = express();
mongoose.connect('mongodb://localhost/Document'); 

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var api = require('./api.js');
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/makeanewone', api.docu);



//BEGIN mongoose section
//Document = require('./models.js').Document(db);
//END Mongoose Section

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});





var express = require('express');

/*
var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
//var fs = require('fs');
//target: 'node';

var session = require('express-session');

var app = express();

var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
var userID;


app.use(cookieParser());

var bodyParser = require('body-parser');
app.use(bodyParser());

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({

secret: 'sdas8203405oa0989#$%¨*@#$23213',
resave: false,
saveUninitialized: true


}));

//app.user('/cssFiles', express;static(_dirname + '/assets'));

app.get('/auth', function (req, resp) {
	resp.sendFile('./Client/src/login.js', {root: __dirname});

});

app.post('/auth', function(req, resp){
//	resp.end(JSON.stringify(req,body));
session = req.sessionID;
//userID = req.sessionID;
	if(req.body.username === 'admin' && req.body.password === 'admin'){
		session = req.body.username;
	}
resp.redirect('/redirects');
});

app.get('/redirects', function(req, resp){
	session = req.sessionID;
if(session){
	console.log(session);
resp.redirect('http://localhost:3000/logou');
}else{
	resp.end('Who are you?');
}

})
app.listen(1337, function(){
	console.log('Listening on port 1337');
});

*/
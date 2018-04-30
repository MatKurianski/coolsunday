

var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');
//var fs = require('fs');
//target: 'node';

var session;

var app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({

secret: 'sdas8203405oa0989#$%¨*@#$23213',
resave: false,
saveUninitialized: true


}));
//app.user('/cssFiles', express;static(_dirname + '/assets'));

app.get('/login', function (req, resp) {
	resp.sendFile('login.js', {root: __dirname});

});

app.post('/login', function(req, resp){
//	resp.end(JSON.stringify(req,body));
session = req.session;

	if(req.body.username === 'admin' && req.body.password === 'admin'){
		session.uniqueID = req.body.username;
	}
resp.redirect('/redirects');
});

app.get('/redirects', function(req, resp){
	session = req.sessions;
if(session.uniqueID){
	console.log(session.uniqueID);
resp.redirect('/admin');
}else{
	resp.end('Who are you?');
}

})
app.listen(1337, function(){
	console.log('Listening on port 1337');
});

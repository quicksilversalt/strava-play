var express = require('express')
,strava = require('strava-v3');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + "/app"));

app.listen(app.get('port'), function(){
	console.log('Node app is running at localhost:' + app.get('port'));
})

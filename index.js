const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const youtubedl = require('youtube-dl');
const app = express();

const url = 'http://';

app.set('port', (8000));

app.use(bodyParser.urlencoded({
    extended:false
}));

const token = 'EAAIiXXZBZBZAd8BAB4j1XmmTR0nxe1V1n3LcJYZB6HmSoTbEwCURZBrqu4SMj9a9JZBSSiI316IZBK9yyDWYM9gzDXRUe73jvYdSbzzfcaruDvaNyCuHymK8ZCnVFcpOdArZAJZCWpgVtYcCW7jgTYMgFTZCZCNKStwO8wIdZCF9EqFxirQjtdbJS9G0X'
app.get('/fr/:tagId', function (req, res) {
  console.log(req.params.tagId);
  //http://localhost:8000/fr/123
  launchDown();
  res.sendStatus(200);
});

function launchDown(){
  /*request({
    url:'https://graph.facebook.com/v7.0/109923754135421/videos',
    qs:{access_token: token},
    method:'POST',
    json:{
     is_reusable:'true',
     file_url:'http://techslides.com/demos/sample-videos/small.mp4'
    }
  }, function(error, response, body){
    if (error){
      console.log('error', error);
    } else if (response.body.error){
      console.log('error', response.body.error);
    }*/
    //console.log(response.body)
    var messageData = {
        messaging_type : "RESPONSE",
        recipient : {
            id : "2846198528820051"
        },
        message : {
            text : "Hello world"
        }
    }
    request({
    url:'https://graph.facebook.com/v8.0/109923754135421/messages',
    qs:{access_token: token},
    method:'POST',
    json:messageData
    });
  /*});*/
  console.log("ok");

}

app.listen(app.get('port'), function(){
  console.log('running port', app.get('port'));
});


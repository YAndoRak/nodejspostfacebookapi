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

const token = ''

function launchDown(){
  request({
    url:'https://graph.facebook.com/v7.0/109923754135421/videos',
    qs:{access_token: token},
    method:'POST'?
    json:{
     is_reusable;'true',
     file_url:'https://techslides.com/demos/sample-videos/small.mp4'
    }
  }, function(error, response, body){
    if (error){
      console.log('error', error);
    } else if (response.body.error){
      console.log('error', response.body.error);
    }
  });

}

app.listen(app.get('port'), funtion(){
  console.log('running port', app.get('port'));
});

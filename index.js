const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const youtubedl = require('youtube-dl');
//var sleep = require('sleep');
const app = express();

const url = 'http://';
app.use(bodyParser.urlencoded({
    extended:false
}));

const token = 'EAAIiXXZBZBZAd8BAB4j1XmmTR0nxe1V1n3LcJYZB6HmSoTbEwCURZBrqu4SMj9a9JZBSSiI316IZBK9yyDWYM9gzDXRUe73jvYdSbzzfcaruDvaNyCuHymK8ZCnVFcpOdArZAJZCWpgVtYcCW7jgTYMgFTZCZCNKStwO8wIdZCF9EqFxirQjtdbJS9G0X'
app.get('/:ytbId/:tagId', function (req, res) {
  console.log(req.params.tagId);
  //http://localhost:8000/fr/123
  urls = getytbinfo(req.params.ytbId, req.params.tagId);
  console.log(urls);
  //launchDown(req.params.tagId);
  res.sendStatus(200);
});
// ytb id WKsjaOqDXgg
function getytbinfo(ytbId, userId){
  var url = 'http://www.youtube.com/watch?v='+ytbId;
 
  youtubedl.getInfo(url, function (err, info){
    launchDown(userId, info.url);
  });

}



//userId = "3120992321317356"
function launchDown(userId, urlfile){
  request({
    url:'https://graph.facebook.com/v8.0/109923754135421/videos',
    qs:{access_token: token},
    method:'POST',
    json:{
     is_reusable:'true',
     file_url:urlfile//'http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4'
    }
  }, function(error, response, body){
    if (error){
      console.log('error', error);
    } else if (response.body.error){
      console.log('error', response.body.error);
    }
    console.log(response.body.id)
    postId = response.body.id
    console.log(postId)
    Vid_link = "https://facebook.com/109923754135421/videos/"+postId;
    //sleep(10);
    sendmess(Vid_link, userId);
  });
  console.log("ok");

}
function sendmess(link, userId){
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
    /*var messageData = {
        messaging_type : "RESPONSE",
        recipient : {
            id : "2846198528820051"
        },
        message : {
            text : "Hello world"
        }
    }*/
    /*conversationmdf = request({
    url:'https://graph.facebook.com/v8.0/109923754135421?fields=conversations{senders}',
    qs:{access_token: token},
    method:'GET'
    }, callBack);
    function callBack(req, res){
      respin = JSON.parse(res.body)
      //ID user no0: respin.conversations.data[0].senders.data[0].id
      //ID converstion of the user no0 : respin.conversations.data[0].id
      console.log(respin.conversations.data[0].id);
      //v8.0/t_2839090689530835/messages?message=
      return res.body;
    };*/
    var messageData = {
        recipient : {
            id : userId
        },
        message : {
            text : link+"\nAttendez quelques minutes svp"
        }};
    posta = request({
    url:'https://graph.facebook.com/v8.0/109923754135421/messages',
    qs:{access_token: token},
    method:'POST',
    json : messageData
    }, callBack2);
    function callBack2(req, res){
      console.log(res.body)
    };
    
  /*});*/
  console.log("ok");

}
//graph.facebook.com/109923754135421?fields=access_token,conversations{senders,id}
app.listen(process.env.PORT || 5000)
/*app.listen(app.get('port'), function(){
  console.log('running port', app.get('port'));
});
*/

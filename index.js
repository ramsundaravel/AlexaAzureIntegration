const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// console.log(typeof(express))

app.get("/name",(req,res)=>{
        // res.send('Hello world from Development')
        res.send('Hi'+" "+req.query['name']);
    }
)


//get the request from Alexa device and send the response
app.post('/alexa', function(req, res) {
    // console.log(Object.keys(req));
    // console.log(req.body)
    // console.log(Object.keys(req.rawTrailers));

    var ask_intent = "";
    if (req.body.request.hasOwnProperty("intent")){
      ask_intent = req.body.request.intent.name;
    }
    console.log(req.body.request.type)
    var ask_type = req.body.request.type;
    var url, rslt;
    var type = "Device";
    var callfaq = true;
   
    if (ask_type == "LaunchRequest"){
      rslt = "Hi! I am a demo bot replaying from microsoft azure platform";
      res.send(JSON.stringify({ "version": "1.0", "response":{ "outputSpeech":{ "type": "PlainText","text": rslt}, "speechletResponse":{"outputSpeech": {"text":rslt}}, "shouldEndSession": true} }));
    }
  });

app.listen(port, ()=>{console.log('Listening on Port 300')})
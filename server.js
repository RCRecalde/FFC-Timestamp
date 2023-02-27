// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { response } = require('express');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/api/:date', (req, res) => {
  let date = req.params.date
  if(date.match(/\d{5,}/)){
      date = +date
  }
  let newDate= new Date(date)
  if(newDate.toUTCString()=== "Invalid Date"){
      res.json({error: newDate.toUTCString()})
  }else { 
    res.json({
      unix: newDate.valueOf(),
      utc: newDate.toUTCString()
  })
}
  
})

app.get('/api', (req, res) => {
  let date = new Date()
  res.json({
      'unix': date.valueOf(),
      'utc': date.toUTCString()
  })
})
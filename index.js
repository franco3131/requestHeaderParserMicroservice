// init project
require('dotenv').config();
var express = require('express');
var axios=require('axios');
var app = express();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204


app.get("/api/whoami", async function(req, res) 
{
  var ip = req.ip;
  var language=req.get('Accept-Language');
  var software=req.get('User-Agent');
    res.json({
  ipaddress:ip,
  language:language,
  software:software
  });
  
});










// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

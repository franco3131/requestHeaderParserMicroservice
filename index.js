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
  var ip = (req.headers['x-forwarded-for'] || '').split(',')[0];
    console.log(ip);
  var language=req.acceptsLanguages();
  var software=req.get('User-Agent');
    res.json({
  ipadress:ip,
  language:language[0],
  software:software

    
  });
  
});










// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

const express = require('express');
const request = require('request');
const { darksky, lat, long, pagespeeds, irx, jrx } = require('./env.json');
const app = express();

app.get('/dash/weather', (req, res) => {
  request.get(`https://api.darksky.net/forecast/${darksky}/${lat},${long}`, function (error, response, body) {
    res.json({ body });
  })
})

app.get('/dash/irxps', (req, res) => {
  request({
    uri: `https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=${irx}/speed/pagespeed/insights/&strategy=mobile&key=${pagespeeds}`
  })
  .pipe(res)
})

app.get('/dash/jrxps', (req, res) => {
  request({
    uri: `https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=${jrx}/speed/pagespeed/insights/&strategy=mobile&key=${pagespeeds}`
  })
  .pipe(res)
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

const express = require('express');
const request = require('request');
const { darksky, lat, long, pagespeeds, irx, jrx } = require('./env.json');
const app = express();

app.get('/dash/weather', (req, res) => {
  request({
    uri: `https://api.darksky.net/forecast/${darksky}/${lat},${long}`
  })
  .pipe(res)
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

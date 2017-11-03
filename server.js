const express = require('express');
const request = require('request');
const { darksky, lat, long } = require('./env.json');
const app = express();

app.get('/dash/weather', (req, res) => {
  request({ uri: `https://api.darksky.net/forecast/${darksky}/${lat},${long}`})
  .pipe(res)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

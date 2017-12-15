const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!')
})

app.get('/healthcheck', function (req, res) {
  res.send('The server is up')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

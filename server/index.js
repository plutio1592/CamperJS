const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4002);

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '열림')
})
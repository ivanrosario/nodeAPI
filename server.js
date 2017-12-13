const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const db = require('./config/db');

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});

//empty object because we havent decided what  db to use
require('./app/routes')(app, db);
app.listen(port, () => {
  console.log('We are live on ' + port);
});
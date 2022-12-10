const express = require("express");
const logger = require('./logger');
require('dotenv').config()
const app = express();
app.use(express.json());

app.use('/',(req,res) => {
  res.send('Hello');
})
app.listen(process.env.PORT || 3000, () => {
  logger.info('app is running in mode: ', {message:`${process.env.PORT}`})
});
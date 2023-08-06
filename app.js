const express=require('express');

const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const loginRoute=require('./routes/login')
const messageRoute = require('./routes/message')

app.use(bodyParser.urlencoded({ extended:false}))

app.use(loginRoute)
app.use(messageRoute)
app.listen(7000)
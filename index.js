
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/fitworld-db', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const router = require('./route');

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('./assets'))
app.use(router)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
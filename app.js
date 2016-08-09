var express = require('express');
var bodyParser = require('body-parser');
var app = express();
global.config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./controllers')); //routes which does't require token authentication should be placed here
app.use(require('./middlewares/TokenValidator')); //middleware to authenticate token
app.use(require('./controllers/account')); //Apis to protect and use token should be placed here

app.listen(config.port,function() {
  console.log("Listening at Port "+config.port);
});

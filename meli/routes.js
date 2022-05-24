var express = require('express');


module.exports.default = function (app) {

  var apiRoutes = express.Router();
  app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token,authorization,Authorization');
    res.header('Access-Control-Allow-Headers', '*');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");


    next();
  });

  app.use('/api/items', require('./api/products/api.products.js'));
}
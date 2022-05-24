console.log("/******** Servidor NodeJs Iniciado ********/");
"use strict";

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var xFrameOptions = require('x-frame-options');
var xssFilter = require('x-xss-protection');
var csp = require('content-security-policy');

var app = express();

require('./routes.js').default(app);

app.use(xFrameOptions('sameorigin'));
app.use(xssFilter());
app.use(csp.getCSP({ 'frame-ancestors': 'self' }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (req, res, next) {
    res.header("X-XSS-Protection", "1; mode=block");
    next();
});

app.use(function (req, res, next) {
    res.header("X-Content-Type-Options", "nosniff");
    next();
});

app.use(function (req, res, next) {
    res.header("X-Frame-Options", "sameorigin");
    next();
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

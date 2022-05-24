#!/bin/env node

/**
 * Module dependencies.
 */
var app = require('./app');
var debug = require('debug')('Server');
var http = require('http');
var https = require('https');
var fs = require('fs');
/**
 * Get port from environment and store in Express.
 */

var ipaddress = ipaddress = "127.0.0.1";

var portHttp = 3071;

app.set('port', portHttp);

/**
 * Create HTTP server.
 */

var serverHttp = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

//servidor Http 
serverHttp.listen(portHttp, ipaddress);


'use strict';

var taunus = require('taunus');
var taunusExpress = require('taunus-express');
var express = require('express');
var app = express();

var options = {};

taunusExpress(taunus, app, options);
app.listen(3000);

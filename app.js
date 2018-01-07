/* ============================

- starts expressjs app on server

- each request to the server first goes through here 
before being forwarded to rputes/app.js

============================*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// require mongoose
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');

var app = express();
// connect to mongodb with every request
// mongoose.connect('path:port/db_name')
mongoose.connect('localhost:27017/mean-messenger');

// view engine setup (creates the single page that holds the Angular application)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// configure which folder is accessible for the public
// all other folders are only accessible to the server
app.use(express.static(path.join(__dirname, 'public')));

// middleware
// handles CORs (cross origin request) errors
// for this application, one server is used to run 
// both frontend and backend code. if not set up properly
// this could pose a security issue
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    // continue with request
    next();
});

// after going through the above code, the request is forwarded
// to routes/app.js
app.use('/', appRoutes);

// if the request does not find the route it needs 
// in routes/app.js, then the request executes the below.
// (catch 404 and forward to error handler)
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;

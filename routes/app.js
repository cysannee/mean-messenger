/*============================

Handles Server-side routing

============================*/
var express = require('express');
var router = express.Router();

// expressRouter.httpmethod('path', callbackFunc(req,res,next) {}) 
// i think httpmethods ends with a response.method
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;

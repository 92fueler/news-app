var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function (req, res, next) {
  //send index.html to start client side
  res.sendFile("index.html", {root: path.join(__dirname, '../../client/build/')});
});

module.exports = router;

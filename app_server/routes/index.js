var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ctrlMain = require('../controllers/main');

var jsonParser = bodyParser.json();

/* GET home page. */
router.get('/', ctrlMain.index);
router.post('/', jsonParser, ctrlMain.filter);

module.exports = router;

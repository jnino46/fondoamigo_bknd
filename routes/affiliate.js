'use strict'

var express = require('express');
var AffiliateController = require('../controllers/affiliate');

var router = express.Router();

router.get('/datos-curso', AffiliateController.datosAfiliado);
router.get('/test-de-controllador', AffiliateController.test);
router.get('/test-de-controllador', AffiliateController.test);

router.post('/save', AffiliateController.save);
router.get('/read/:last?', AffiliateController.getAll);
router.get('/find/:id', AffiliateController.getAffiliate);

module.exports = router;
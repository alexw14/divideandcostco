var express = require('express');
var router = express.Router();
var product = require('./../models/product');
var productCtrl = require('./../controllers/productsController');

// router.get('/', (req, res) => {
//     res.render('products/products', {products});
// });

router.get('/', productCtrl.index);

module.exports = router;
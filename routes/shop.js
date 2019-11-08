const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();


//router.pug

router.get('/', (req, res, next) => {
    const products = adminData.products;
    const descriptions = adminData.descriptions;
    console.log("TEA:LKJRFSAL:ALK:");
    console.log(adminData.products);
    console.log(adminData.descriptions);
    
    res.render('shop', {prods: products, desc: descriptions, docTitle: '$h0:p'});
});

//router.get('/',(req, res, next) => {
//    console.log(adminData.products);
//    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
//});

module.exports = router;
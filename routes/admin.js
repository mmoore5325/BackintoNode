const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

const products = [];
const descriptions = [];
const price = [];
// /admin/add-product - GET request

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
});

router.post('/add-product',(req,res,next)=>{
    //this pushes to the products empty array the post of the product
    products.push({title: req.body.title, descriptions: req.body.descriptions, price: req.body.price});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
exports.descriptions = descriptions;
exports.price = price;

// module.exports = router;


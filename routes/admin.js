const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

const products = [];
const descriptions = [];
// /admin/add-product - GET request

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
});

router.post('/add-product',(req,res,next)=>{
    //this pushes to the products empty array the post of the product
    products.push({title: req.body.title});
    // descriptions.push({descriptions: req.body.descriptions});
    descriptions.push({descriptions: req.body.descriptions});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
// module.exports = router;


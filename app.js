
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
//app.set('views', 'FileFolderNameForViews')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminData.routes)
// app.use('/admin',adminRoutes);
app.use(shopRoutes);

// there is also app.get and app.post
// 404 File not found below, chicken fucker.
app.use('/', (req, res, next) =>{
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // now rendering pug
    res.status(404).render('404', {pageTitle: 'WTF joo think joo goin???'});
})


 app.listen(3000);

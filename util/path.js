const path = require('path');

//mainModule refers to main application - in this case - app.js
module.exports = path.dirname(process.mainModule.filename);


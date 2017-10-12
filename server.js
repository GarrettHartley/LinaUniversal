// New. Needs to be on top of babel-register
require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
});

require('babel-register')({
    presets: ['react', 'es2015']
});

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(require('./routes/index.jsx'));

var PORT = 49180;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});

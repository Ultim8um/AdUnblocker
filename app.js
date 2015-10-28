// Acquire Express object
var express =  require('express');
var app = express();

// Acquire file system module
var fs = require('fs');
// Acquire path module
var path = require('path');

// Set view folder
app.set('views', './views');

// Specify template engine
app.set('view engine', 'jade');

// Set assets folder
app.use(express.static('public'));

// Set Home route
app.get('/', function(req, res) {
    fs.readFile(path.join(__dirname, 'public/images/ad.jpg'), function (err, data) {
        if (err) throw err;
        
        // TODO: Randomized file and directory
        
        // Respond with jade index
        res.render('index', {
            src: data.toString('base64')
        });
    });    
});

// Listen on http://localhost:3000
var server = app.listen(3000);
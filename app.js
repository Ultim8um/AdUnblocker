/* ------------Dependencies------------ */
var express =  require('express');
var fs = require('fs');
var path = require('path');
var tmp = require('tmp');

// Initialize express app
var app = express();

// Set view folder
app.set('views', './views');

// Specify template engine
app.set('view engine', 'jade');

// Set assets folder
app.use(express.static('public'));

// Home route
app.get('/', function(req, res) {    
    fs.readFile(path.join(__dirname, 'public/images/ad.jpg'), function (err, data) {
        if (err) throw err;
        
        // Generate random image file
        var randImgName = tmp.tmpNameSync({mode: 0644, prefix: '_', postfix: '.jpg', dir: './public/images/'});
        // Generate random directory
        var randDirName = tmp.dirSync({template: './public/XXXXXX'});
        
        // Create random image file
        fs.writeFileSync(randImgName, data);
        console.log("Successfully created random image at: ", randImgName);
        
        // Extract image from randImgName path
        var randImg = path.parse(randImgName);
        // Construct random directory name + image
        var randDir = path.basename(randDirName.name) + '/' + randImg.base;
        
        // Create random directory + image
        fs.writeFileSync(path.join(__dirname, 'public/' + randDir), data);
        console.log("Successfully created random directory and image at: ", randDir);       
        
        // Respond with jade index template and context
        res.render('index', {
            encoded_img: data.toString('base64'),
            random_img: randImg.base,
            random_dir: randDir
        });
    });    
});

// Listen on http://localhost:3000
var server = app.listen(3000, function() {
    console.log('Server listening on http://localhost:3000');
});
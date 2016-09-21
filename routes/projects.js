var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var galleryPictures = [];
    var dirname ='/images/gallery/';
    var getDir = './public/images/gallery';
    console.log(getDir);
    var files = fs.readdirSync(getDir);
    files.forEach(function(file, index){
        var imageObj = {
            'src':file, 
            'index':index
        };
        console.log(imageObj);
        galleryPictures.push(imageObj);

    });
    console.log("galleryPictures: " + galleryPictures);
    res.render('projects', { title: 'Project Gallery', 'dirname': dirname,'pics': galleryPictures });
});

module.exports = router;
"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var moviesPath = path.resolve('E:\Peliculas');
fs.readdir(moviesPath, function (err, files) {
    if (err) {
        console.log(err);
    }
    else {
        files.forEach(function (file) {
            console.log(file);
        });
    }
});

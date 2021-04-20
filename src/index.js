"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var xlsx = require("xlsx");
var moviesPath = path.resolve('F:/Peliculas');
var movies = fs.readdirSync(moviesPath);
console.log(movies);
var excelFile = path.resolve('C:/Users/weyla/Downloads/movies.xlsx');
var workbook = xlsx.readFile(excelFile);
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
movies.forEach(function (element, index) {
    xlsx.utils.sheet_add_aoa(worksheet, [[element]], { origin: "A" + index });
});
xlsx.writeFile(workbook, "C:/Users/weyla/Downloads/movies.xlsx");

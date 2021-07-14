"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var xlsx = require("xlsx");
var moviesPath = path.resolve('D:/Peliculas');
try {
    // Read movie names on directory
    var moviesInDirectory = fs.readdirSync(moviesPath);
    //Read Excel and write movies on it
    var excelFile = path.resolve('C:/Users/Aorus/OneDrive/Peliculas.xlsx');
    var workbook = xlsx.readFile(excelFile);
    var all_movies_sheet = workbook.SheetNames[0];
    var lacie_sheet = workbook.SheetNames[1];
    var wd_label_sheet = workbook.SheetNames[2];
    var wd_no_label_sheet = workbook.SheetNames[3];
    var worksheet_1 = workbook.Sheets[wd_label_sheet];
    moviesInDirectory.forEach(function (element, index) {
        xlsx.utils.sheet_add_aoa(worksheet_1, [[element]], { origin: "A" + (index + 1) });
    });
    xlsx.writeFile(workbook, "C:/Users/Aorus/OneDrive/Peliculas.xlsx");
}
catch (error) {
    console.log(error);
}

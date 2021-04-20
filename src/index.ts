import * as fs from 'fs';
import * as path from 'path';
import * as xlsx from 'xlsx';

const moviesPath = path.resolve('F:/Peliculas');

try {
    // Read movie names on directory
    const moviesInDirectory = fs.readdirSync(moviesPath);

    //Read Excel and write movies on it
    const excelFile = path.resolve('C:/Users/weyla/Downloads/movies.xlsx');
    let workbook = xlsx.readFile(excelFile);

    let first_sheet_name = workbook.SheetNames[0];

    let worksheet = workbook.Sheets[first_sheet_name];

    moviesInDirectory.forEach((element: any, index: any) => {
        xlsx.utils.sheet_add_aoa(worksheet, [[element]], {origin: `A${index}`});
    });

    xlsx.writeFile(workbook, "C:/Users/weyla/Downloads/movies.xlsx");
} catch (error) {
    console.log(error);
}


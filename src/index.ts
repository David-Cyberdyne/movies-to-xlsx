import * as fs from 'fs';
import * as path from 'path';
import * as xlsx from 'xlsx';

const moviesPath = path.resolve('D:/Peliculas');

try {
    // Read movie names on directory
    const moviesInDirectory = fs.readdirSync(moviesPath);
    const excelFile = path.resolve('C:/Users/Aorus/OneDrive/Peliculas.xlsx');

    //Read Excel and write movies on it
    let workbook = xlsx.readFile(excelFile);

    let all_movies_sheet = workbook.SheetNames[0];
    let lacie_sheet = workbook.SheetNames[1];
    let wd_label_sheet = workbook.SheetNames[2];
    let wd_no_label_sheet = workbook.SheetNames[3];

    let worksheet = workbook.Sheets[wd_no_label_sheet];

    moviesInDirectory.forEach((element: any, index: any) => {
        xlsx.utils.sheet_add_aoa(worksheet, [[element]], {origin: `A${index + 1}`});
    });

    xlsx.writeFile(workbook, excelFile);
} catch (error) {
    console.log(error);
}


const ExcelJs = require("exceljs");

async function writeExcelTest(searchText, replaceText, filePath) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet("Sheet1");
  const searchTerm = await readExcelTest(worksheet, searchText);

  const cell = worksheet.getCell(searchTerm.row, searchTerm.column);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}
async function readExcelTest(worksheet, searchText) {
  let output = { row: 0, column: 0 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    });
  });
  return output;
}

writeExcelTest("Banana", "Republic", "D:/excelDownloadTest.xlsx");

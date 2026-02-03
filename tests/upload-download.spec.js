const { test, expect } = require("@playwright/test");
const Exceljs = require("exceljs");

// const workbook = new Exceljs.Workbook();
// workbook.xlsx
//   .readFile("/Users/htinzaw/desktop/exceldownloadTest.xlsx")
//   .then(function () {
//     const worksheet = workbook.getWorksheet("Sheet1");
//     worksheet.eachRow((row, rowNumber) => {
//       row.eachCell((cell, colNumber) => {
//         console.log(cell.value);
//       });
//     });
//   });

async function writeExcelTest(searchText, replaceText, change, filePath) {
  const workbook = new Exceljs.Workbook();
  // await workbook.xlsx.readFile("/Users/htinzaw/desktop/exceldownloadTest.xlsx");
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet("Sheet1");
  const output = await readExcel(worksheet, searchText);

  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
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

// writeExcelTest(
//   "Mango",
//   350,
//   { rowChange: 0, colChange: 2 },
//   "/Users/htinzaw/desktop/exceldownloadTest.xlsx",
// );

test("Upload download excel validation", async ({ page }) => {
  const textSearch = "Mango";
  const updateValue = "350";
  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html",
  );
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();
  await downloadPromise;
  writeExcelTest(
    textSearch,
    updateValue,
    { rowChange: 0, colChange: 2 },
    "/Users/htinzaw/desktop/download.xlsx",
  );
  await page.locator("#fileinput").click();
  await page
    .locator("#fileinput")
    .setInputFiles("/Users/htinzaw/desktop/download.xlsx");
  const textLocator = await page.getByText(textSearch);
  const desireRow = await page.getByRole("row").filter({ has: textLocator });
  await expect(desireRow.locator("#cell-4-undefined")).toContainText(updateValue);
});

// ====================================================

// const ExcelJs = require("exceljs");
// const { test, expect } = require("@playwright/test");

// async function writeExcelTest(searchText, replaceText, change, filePath) {
//   const workbook = new ExcelJs.Workbook();
//   await workbook.xlsx.readFile(filePath);
//   const worksheet = workbook.getWorksheet("Sheet1");
//   const output = readExcel(worksheet, searchText); // not async

//   const cell = worksheet.getCell(output.row, output.column + change.colChange);
//   cell.value = replaceText;
//   await workbook.xlsx.writeFile(filePath);
// }

// // This does no async work, so don't mark it async.
// function readExcel(worksheet, searchText) {
//   let output = { row: -1, column: -1 };
//   worksheet.eachRow((row, rowNumber) => {
//     row.eachCell((cell, colNumber) => {
//       if (cell.value === searchText) {
//         output = { row: rowNumber, column: colNumber };
//       }
//     });
//   });
//   return output;
// }

// //update Mango Price to 350.
// //writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");

// test("Upload download excel validation", async ({ page }) => {
//   const textSearch = "Mango";
//   const updateValue = "350";

//   await page.goto(
//     "https://rahulshettyacademy.com/upload-download-test/index.html",
//   );

//   const download = page.waitForEvent("download");
//   await page.getByRole("button", { name: "Download" }).click();
//   const dl = await download;
//   const filePath = "/Users/rahulshetty/downloads/download.xlsx"; // or await dl.path()

//   // ✅ Ensure the edit finishes before upload
//   await writeExcelTest(
//     textSearch,
//     updateValue,
//     { rowChange: 0, colChange: 2 },
//     filePath,
//   );

//   await page.locator("#fileinput").setInputFiles(filePath);

//   const desiredRow = await page
//     .getByRole("row")
//     .filter({ has: page.getByText(textSearch) });
//   await expect(desiredRow.locator("#cell-4-undefined")).toContainText(
//     updateValue,
//   );
// });

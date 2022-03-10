const fs = require("fs");
const pdfParse = require("pdf-parse");

const pdfFile = fs.readFileSync("test.pdf");

pdfParse(pdfFile).then(function (data) {
  console.log(data.numpages);
  console.log(data.text);
  console.log(data.info);
});

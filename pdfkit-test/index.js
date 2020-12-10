const express = require("express");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const bodyParser = require("body-parser");
const Cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(
    Cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.post("/", function (req, res) {
    console.log(req.body.name);
    res.send("Received data for PDF");
    let pdfDoc = new PDFDocument();
    pdfDoc.pipe(fs.createWriteStream(`PDF for ${req.body.name}.pdf`));
    pdfDoc.text(`Name: ${req.body.name}`);
    pdfDoc.text(`Email: ${req.body.email}`);
    pdfDoc.end();
});

app.listen(4000, () => {
    console.log("Express app listening on port 4000");
});

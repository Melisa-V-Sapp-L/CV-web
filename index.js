// Variables
const express = require("express");
const app = express();
const port = 8000;

//Public Folder
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//Plantillas - Templates
app.set("view engine", "ejs");

//Routes
app.use("/", require("./router"));

//Server
app.listen(port, (req, res) => {
  console.log("Server Up! Running in http://localhost:8000");
});

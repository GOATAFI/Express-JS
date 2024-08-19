import express from "express";
const app = express();

// ---------- HTTP METHODS ----------
//GET -> Retrieve Data
//POST -> Create / Insert data
//PUT -> Completely Update Data
//PATCH -> Partially Update Data
//Delete -> Delete data

//Basic Routing
app.get("/", (req, res) => {
  res.send("<h1>Welcome Home</h1>");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});
app.get("/contact", (req, res) => {
  res.send("Contact us!");
});
//listening server
app.listen(8008, () => console.log("Server up"));

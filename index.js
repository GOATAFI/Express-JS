import express from "express";
const app = express();

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

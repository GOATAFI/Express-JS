import express from "express";
const app = express();

// ---------- HTTP METHODS ----------
//GET -> Retrieve Data
//POST -> Create / Insert data
//PUT -> Completely Update Data
//PATCH -> Partially Update Data
//Delete -> Delete data
console.clear();
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

const cb1 = (req, res, next) => {
  console.log("First callback");
  //   res.send("hello");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second callback");
  //   res.send("niggas");
  next();
};

const cb3 = (req, res) => {
  console.log("Third callback");
  res.send("Welcome to array callbacks");
};
app.get("/array-cb", [cb1, cb2, cb3]);

// app.get("/student", (req, res) => {
//   res.send("All Students");
// });
// app.post("/student", (req, res) => {
//   res.send("Add New Students");
// });
// app.put("/student", (req, res) => {
//   res.send("Update Students");
// });
// app.delete("/student", (req, res) => {
//   res.send("Delete Students");
// });

//Refactor
//app.route()

app
  .route("/student")
  .get((req, res) => res.send("All Student"))
  .post((req, res) => res.send("Add New Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));

//listening server
app.listen(8008, () => console.log("Server up"));

import express from "express";
// import students from "./routes/student.js";
import path from "path";
import userCredentials from "./middlewares/logs.js";
import products from "./products.js";
import students from "./routes/student.js";
import teachers from "./routes/teachers.js";
const app = express();

// ---------- HTTP METHODS ----------
//GET -> Retrieve Data
//POST -> Create / Insert data
//PUT -> Completely Update Data
//PATCH -> Partially Update Data
//Delete -> Delete data
console.clear();
//Basic Routing
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome Home</h1>");
// });
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

//Advanced Routing
//1. Create routes folder and put your routes in a separate file
//2. Create instance of express.Router()
//3. Instead of app.method change that to "router.method"
//4. Export router
//5. Import router
//6. use the (app.use) built-in middleware & provide your routes

app.use("/students", students);

app.use("/teachers", teachers);

//Route Params
app.get("/students/delete/:id", (req, res) => {
  res.send(req.params.id);
});
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Category : ${category} & ID : ${id}`);
});

//Query String

app.get("/product", (req, res) => {
  // res.send(`Response OK ${req.query.category}`);
  const { category, id } = req.query;
  res.send(`Product Category : ${category} & Product ID : ${id}`);
});

//backend to frontend
app.get("/products", (req, res) => {
  res.json(products);
});

//middleware
// function userCredentials(req, res, next) {
//   console.log("Username : alex");
//   console.log("email : alexvodai@gmail.com");
//   console.log("password : 123456 ");
//   console.log("Age : 23");
//   next();
// }
app.use(userCredentials);
app.get("/", (req, res) => {
  res.send("<h1>Hello Admin</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Admin</h1>");
});
app.get("/contactA", (req, res) => {
  res.send("<h1>Contact Admin</h1>");
});

//sob route ei credentials gula chole jabe

app.use(express.static("./public"));
app.get("/m", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

//listening server
app.listen(8008, () => console.log("Server up"));

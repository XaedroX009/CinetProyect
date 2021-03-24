const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Database successfuly connected");
});

mongoose.connection.on("error", (error) => {
  console.log("Error connecting to the database: ", error);
});

const testmiddleware = (req, response, next) => {
  console.log("middleware executed");
  next();
};
const testmiddleware2 = (req, response, next) => {
  console.log("second middleware executed");
  next();
};

app.use(testmiddleware);

app.get("/", (req, response) => {
  console.log("Homepage");
  response.send("Home Page");
  //response.send("Hello world at Homepage!");
});

app.get("/Login", testmiddleware2, (req, response) => {
  console.log("Login");
  response.send("Login page");
});

app.get("/About", (req, response) => {
  console.log("About");
  response.send("About Page");
});

app.get("/Register", (req, response) => {
  console.log("Register");
  response.send("Register Page");
});

app.use(express.json());
require("./Models/user");
require("./Models/post");
app.use(require("./Routes/auth"));
app.use(require("./Routes/post"));

app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});

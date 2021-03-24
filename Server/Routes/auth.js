const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../Middleware/requireLogin");

router.post("/signup", (req, response) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return response.status(403).json({ error: "Please fill all the fields!" });
  }
  //response.status(200).json({ message: "POST request succesfull" });
  User.findOne({ email: email })
    .then((userSaved) => {
      if (userSaved) {
        response.status(422).json({ error: "This email is already registred" });
      }
      bcrypt.hash(password, 12).then((hashpss) => {
        const user = new User({
          email,
          name,
          password: hashpss,
        });

        user
          .save()
          .then((user) => {
            response.json({ message: "saved successfully" });
          })
          .catch((error) => {
            console.log("An error has occured: ", error);
          });
      });
    })
    .catch((error) => {
      console.log("An error has occured: ", error);
    });
});

router.post("/signin", (req, response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return response
      .status(422)
      .json({ error: "Email or password fields are empty!" });
  }
  User.findOne({ email }).then((UserMail) => {
    if (!UserMail) {
      return response.status(422).json({ error: "Invalid email or password" });
    }
    bcrypt
      .compare(password, UserMail.password)
      .then((Match) => {
        if (Match) {
          //response.json({ message: "Successfully login!" });
          const token = jwt.sign({ _id: UserMail._id }, JWT_SECRET);
          response.json({ token });
        } else {
          return response
            .status(422)
            .json({ error: "Invalid email or password" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

// router.get("/protected", requireLogin, (req, response) => {
//   response.send("Helelelelelo");
// });

// router.get("/protected", (req, response) => {
//   const { name } = response.name;
//   response.send("Welcome User ", name);
// });

module.exports = router;

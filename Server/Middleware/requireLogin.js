const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, response, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    //console.log(authorization);

    return response.status(401).json({
      error:
        "You must be logged in to access this section Credentials not given",
    });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (Error, payload) => {
    if (Error) {
      return response.status(401).json({
        error:
          "You must be logged in to access this section Invalid Token or Credentials",
      });
    }
    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};

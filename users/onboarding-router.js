const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("./users-model");
const generateToken = require("../auth/gen-token.js").generateToken;

//add a user
router.post("/onboarding", (req, res) => {
  let { user, vehicle, routePref } = req.body;

  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;
  //add the user
  Users.add(user)
    .then(user => {
      //res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

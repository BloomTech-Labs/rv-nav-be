const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("./users-model");
const Vehicle = require('./vehicle-model');
const generateToken = require("../auth/gen-token.js").generateToken;

//add a user
router.post("/onboarding", (req, res) => {
  let { user, vehicle, routePref } = req.body;

  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;
  //add the user
  Users.add(user)
    .then(user => {
      let {status, error} = Users.login(email, password) 
      if (status = 200) {
        res.status(200).json({
          message: `Welcome ${user.email}!`,
          token,
          user
        });
        //Add vehicle
        Vehicle.add(vehicle)
        //Add Routing Prefs
        //TODO: Extend BE with Route Faetures API/Endpoints
      } else if (status = 401) {
        res.status(401).json({ message: 'Invalid Credentials' });
      } else if (status = 500) {
        res.status(500).json(error);
      }
    })
    .catch(error => {
      //Add user failed
      res.status(500).json(error);
    });
});

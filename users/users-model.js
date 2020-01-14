const db = require("../database/dbconfig.js");

module.exports = {
  add,
  findById,
  findBy,
  findUsers,
  removeUser,
  login
};

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}

function findUsers() {
  return db("users");
}

function removeUser(id) {
  return db("users")
    .where({ id })
    .del();
}
function login(email, password) {
  const router = require("express").Router();
  const bcrypt = require("bcryptjs");
  const Users = require("./users-model");
  const generateToken = require("../auth/gen-token.js").generateToken;

  //add a user
  router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;

    Users.add(user)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
}

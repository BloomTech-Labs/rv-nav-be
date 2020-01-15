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
function findByUser(user) {
  return db("users").where(function() {
    this.where('email', user.email)
    .orWhere('googleEmail', user.googleEmail)
    .orWhere('facebookEmail', user.facebookEmail);
  });
}

function findUsers() {
  return db("users");
}

function removeUser(id) {
  return db("users")
    .where({ id })
    .del();
}
function login(user) {
  Users.findByUser({ user })
  .first()
  .then(foundUser => {
    if (foundUser && 
          (bcrypt.compareSync(password, user.password) ||
          bcrypt.compareSync(foundUser.password, user.googleId) ||
          bcrypt.compareSync(foundUser.password, user.password)
        ))
    {
      const token = generateToken(user);
      //Return login success
      return 200;
    } else {
      //Return invalid credentials
      return 401;
    }
  })
  .catch(error => {
    return 500, error;
  });
}

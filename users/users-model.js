const db = require('../database/dbconfig.js');

module.exports = {
  add,
  findById,
  findBy,
  findUsers,
  removeUser
};

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('users').where(filter);
}

function findUsers() {
  return db('users');
}

function removeUser(id) {
  return db('users')
    .where({ id })
    .del();
}
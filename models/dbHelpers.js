//where we write our knex queries
const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = {
  add,
  find,
  findById,
  remove,
};

//add, find, findById, remove, update
async function add(lesson) {
  const [id] = await db("lessons").insert(lesson);
  // return id;
  return findById(id);
}

function find() {
  return db("lessons");
}

function findById(id) {
  return db("lessons").where({ id: id }).first();
}

function remove(id) {
  return db("lessons").where({ id: id }).del();
}

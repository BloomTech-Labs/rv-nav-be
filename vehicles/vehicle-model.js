const db = require("../database/dbconfig.js");

module.exports = {
  add,
  deleteVehicle,
  // findById,
  findBy,
  findUsersVehicles,
  updateVehicle,
  addVehicleName,
  addVehicleHeight,
  addVehicleAxel,
  addVehicleClass,
  addVehicleTires,
  addVehicleTrailer,
  addVehicleWidth,
  addVehicleDirtRoads,
  addVehiclePotholes,
  addVehicleSteepGrade,
  addVehicleLength,
  addVehicleWeight
};

async function add(vehicle) {
  console.log("Made it!");

  const response = await db("vehicle").insert(vehicle, "id");
  console.log(response);
  return response;
}

function addVehicleName(id, name) {
  return db("vehicle")
    .where({ id })
    .insert(name);
}
function addVehicleHeight(id, height) {
  return db("vehicle")
    .where({ id })
    .insert(height);
}
function addVehicleWidth(id, width) {
  return db("vehicle")
    .where({ id })
    .insert(width);
}
function addVehicleLength(id, length) {
  return db("vehicle")
    .where({ id })
    .insert(length);
}
function addVehicleWeight(id, weight) {
  return db("vehicle")
    .where({ id })
    .insert(weight);
}
function addVehicleAxel(id, axel_count) {
  return db("vehicle")
    .where({ id })
    .insert(axel_count);
}
function addVehicleClass(id, vehicle_class) {
  return db("vehicle")
    .where({ id })
    .insert(vehicle_class);
}
function addVehicleTires(id, dual_tires) {
  return db("vehicle")
    .where({ id })
    .insert(dual_tires);
}

function addVehicleTrailer(id, trailer) {
  return db("vehicle")
    .where({ id })
    .insert(trailer);
}
function addVehicleDirtRoads(id, DirtRoads) {
  return db("vehicle")
    .where({ id })
    .insert(DirtRoads);
}
function addVehicleSteepGrade(id, SteepGrade) {
  return db("vehicle")
    .where({ id })
    .insert(SteepGrade);
}
function addVehiclePotholes(id, Potholes) {
  return db("vehicle")
    .where({ id })
    .insert(Potholes);
}

function findBy(filter) {
  return db("vehicle").where(filter);
}

function findUsersVehicles(user_id) {
  return db("vehicle").where({ user_id });
}

function updateVehicle(id, changedVehicle) {
  return db("vehicle")
    .where({ id })
    .update(changedVehicle);
}

function deleteVehicle(id) {
  return db("vehicle")
    .where({ id })
    .del();
}

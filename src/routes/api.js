const express = require("express");
const routerAPI = express.Router();

const {
  getUsersAPI,
  postUserAPI,
  putUserAPI,
  deleteUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postUserAPI);
routerAPI.put("/users", putUserAPI);
routerAPI.delete("/users", deleteUserAPI);

module.exports = routerAPI;

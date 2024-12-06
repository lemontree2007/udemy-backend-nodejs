const express = require("express");
const routerAPI = express.Router();

const {
  getUsersAPI,
  postUserAPI,
  putUserAPI,
  deleteUserAPI,
  postFileAPI,
  postMultipleFileAPI,
} = require("../controllers/apiController");

const { postCustomerAPI } = require("../controllers/customerController");
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postUserAPI);
routerAPI.put("/users", putUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postFileAPI);
routerAPI.post("/files", postMultipleFileAPI);

routerAPI.post("/customers", postCustomerAPI);

module.exports = routerAPI;

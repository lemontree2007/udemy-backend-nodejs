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

const { postCustomerAPI, postArrayCustomerAPI, getCustomersAPI, putCustomersAPI ,deleteCustomerAPI } = require("../controllers/customerController");
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postUserAPI);
routerAPI.put("/users", putUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postFileAPI);
routerAPI.post("/files", postMultipleFileAPI);

routerAPI.post("/customers", postCustomerAPI);
routerAPI.post("/customers-many", postArrayCustomerAPI);
routerAPI.get("/customers", getCustomersAPI);
routerAPI.put("/customers", putCustomersAPI);
routerAPI.delete("/customers", deleteCustomerAPI);

module.exports = routerAPI;

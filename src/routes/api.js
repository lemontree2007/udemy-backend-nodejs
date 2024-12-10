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

const {
  postCustomerAPI,
  postArrayCustomerAPI,
  getCustomersAPI,
  putCustomersAPI,
  deleteCustomerAPI,
  deleteArrCustomerAPI,
} = require("../controllers/customerController");
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
routerAPI.delete("/customer-many", deleteArrCustomerAPI);

routerAPI.get("/info", (req, res) => {
  console.log(req.query);

  return res.status(200).json({
    data: req.query,
  });
});
routerAPI.get("/info/:name/:address", (req, res) => {
  console.log(req.params);

  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;

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

const {
  postCreateProjectAPI,
  getProjectAPI,
  putProjectAPI,
  deleteProjectAPI,
} = require("../controllers/projectController");

const {
  postCreateTaskAPI,
  getTaskAPI,
  uTaskAPI,
  dTaskAPI,
} = require("../controllers/taskController");

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

//project router
routerAPI.get("/projects", getProjectAPI);
routerAPI.post("/projects", postCreateProjectAPI);
routerAPI.put("/projects", putProjectAPI);
routerAPI.delete("/projects", deleteProjectAPI);
//task project
routerAPI.post("/tasks", postCreateTaskAPI);
routerAPI.get("/tasks", getTaskAPI);
routerAPI.put("/tasks", uTaskAPI);
routerAPI.delete("/tasks", dTaskAPI);

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

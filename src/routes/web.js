const express = require("express");
const {
  getHomePage,
  getSample,
  postUser,
  getCreate,
  getUpdate,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
router.get("/", getHomePage);

router.get("/sample", getSample);

router.get("/create", getCreate);

router.get("/update/:id", getUpdate);

router.post("/create-user", postUser);
router.post("/update-user", postUpdateUser);

module.exports = router;

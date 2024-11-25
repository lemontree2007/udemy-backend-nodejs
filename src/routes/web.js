const express = require("express");
const {
  getHomePage,
  getSample,
  postUser,
  getCreate,
} = require("../controllers/homeController");
const router = express.Router();

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
router.get("/", getHomePage);

router.get("/sample", getSample);

router.get("/create", getCreate);

router.post("/create-user", postUser);

module.exports = router;

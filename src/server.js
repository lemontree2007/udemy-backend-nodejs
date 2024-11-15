const express = require("express"); //import express
const path = require("path");
const app = express(); // tạo express application
require("dotenv").config();
const port = process.env.PORT || 8888; // init port

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sample", (req, res) => {
  res.render("sample.ejs");
});

app.set("views", path.join(__dirname, "views")); // khai bao template engine
app.set("view engine", "ejs");

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

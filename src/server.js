require("dotenv").config();
const express = require("express"); //import express
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/db");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const app = express(); // tạo express application
const port = process.env.PORT || 8888; // init port
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
//config template engine
configViewEngine(app);
// config router
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connection", error);
  }
})();

// test connection

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)

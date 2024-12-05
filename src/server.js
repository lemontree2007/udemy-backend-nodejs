require("dotenv").config();
const express = require("express"); //import express
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/db");
const webRouter = require("./routes/web");
const app = express(); // tạo express application
const port = process.env.PORT || 8888; // init port
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
//config template engine
configViewEngine(app);
// config router
app.use("/", webRouter);

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

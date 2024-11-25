const connection = require("../config/db");
const { getAllUsers } = require("../services/crudService");

const getHomePage = async (req, res) => {
  let row = await getAllUsers();
  return res.render("home.ejs", { listUsers: row });
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};

const getCreate = (req, res) => {
  res.render("create.ejs");
};

const postUser = async (req, res) => {
  let { email, name, city } = req.body;
  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //    VALUES (?, ?, ?);`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log("Create user succeed!");
  //     return res.render("home.ejs");
  //   }
  // );
  let [row, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  res.send("Create user succeed!");
};
module.exports = {
  getHomePage,
  getSample,
  postUser,
  getCreate,
};

const connection = require("../config/db");
const { getAllUsers, getAllUserById } = require("../services/crudService");

const getHomePage = async (req, res) => {
  let row = await getAllUsers();
  return res.render("home.ejs", { listUsers: row });
};
const getUpdate = async (req, res) => {
  const userId = req.params.id;
  let user = getAllUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};

const getCreate = (req, res) => {
  res.render("create.ejs");
};

const postUser = async (req, res) => {
  let { email, name, city } = req.body;
  let [row, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  res.render("create.ejs");
};
module.exports = {
  getHomePage,
  getSample,
  postUser,
  getCreate,
  getUpdate,
};

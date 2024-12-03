const connection = require("../config/db");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../services/crudService");

const getHomePage = async (req, res) => {
  let row = await getAllUsers();
  return res.render("home.ejs", { listUsers: row });
};
const getUpdate = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
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
  await createUser(email, name, city);
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getSample,
  postUser,
  getCreate,
  getUpdate,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};

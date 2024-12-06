const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../services/crudService");

const User = require("../models/user");
const getHomePage = async (req, res) => {
  let row = await User.find({});
  return res.render("home.ejs", { listUsers: row });
};
const getUpdate = async (req, res) => {
  const userId = req.params.id;
  // let user = await getUserById(userId);
  let user = await User.findById(userId).exec();
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
  await User.create({
    email,
    name,
    city,
  });
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  // await updateUserById(email, name, city, userId);
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  // let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  let result = await User.deleteOne({ _id: id });
  // await deleteUserById(id);
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

const User = require("../models/user");

const getUsersAPI = async (req, res) => {
  let row = await User.find({});
  return res.status(200).json({
    error: 0,
    data: row,
  });
};

const postUserAPI = async (req, res) => {
  let { email, name, city } = req.body;
  let user = await User.create({
    email,
    name,
    city,
  });

  return res.status(200).json({
    error: 0,
    data: user,
  });
};

const putUserAPI = async (req, res) => {
  let { email, name, city, userId } = req.body;
  let user = await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    error: 0,
    data: user,
  });
};
const deleteUserAPI = async (req, res) => {
  const id = req.body.userId;
  let user = await User.deleteOne({ _id: id });
  return res.status(200).json({
    error: 0,
    data: user,
  });
};

module.exports = {
  getUsersAPI,
  postUserAPI,
  putUserAPI,
  deleteUserAPI,
};

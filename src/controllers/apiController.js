const User = require("../models/user");
const {
  uploadSingleFile,
  uploadMutipleFiles,
} = require("../services/fileService");
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
const postFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  let result = await uploadSingleFile(req.files.image);
  console.log("result", result);

  return res.send("ok");
};

const postMultipleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  if (Array.isArray(req.files.image)) {
    let result = await uploadMutipleFiles(req.files.image);
    return res.status(200).json({
      error: 0,
      data: result,
    });
  } else {
    return await postFileAPI(req, res);
  }
};

module.exports = {
  getUsersAPI,
  postUserAPI,
  putUserAPI,
  deleteUserAPI,
  postFileAPI,
  postMultipleFileAPI,
};

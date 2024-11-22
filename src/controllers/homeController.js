const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};

const postUser = (req, res) => {
  console.log("req.body", req.body);
  res.send(req.body);
};
module.exports = {
  getHomePage,
  getSample,
  postUser,
};

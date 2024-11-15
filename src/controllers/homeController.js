const getHomePage = (req, res) => {
  res.send("Hello World! & nodemon");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getSample,
};

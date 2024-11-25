const connection = require("../config/db");

const getAllUsers = async () => {
  let [row, fields] = await connection.query(`select * from Users`);
  return row;
};

module.exports = {
  getAllUsers,
};

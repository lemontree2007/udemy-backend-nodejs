const connection = require("../config/db");

const getAllUsers = async () => {
  let [row, fields] = await connection.query(`select * from Users`);
  return row;
};

const getAllUserById = async (userId) => {
  let [row, fields] = await connection.query(
    `select * from Users where id= ?`,
    [userId]
  );
  let user = row && row.length > 0 ? row[0] : {};
  return user;
};

module.exports = {
  getAllUsers,
  getAllUserById,
};

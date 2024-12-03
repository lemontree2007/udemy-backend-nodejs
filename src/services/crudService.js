const connection = require("../config/db");

const getAllUsers = async () => {
  let [row, fields] = await connection.query(`select * from Users`);
  return row;
};

const getUserById = async (userId) => {
  let [row, fields] = await connection.query(
    `select * from Users where id= ?`,
    [userId]
  );
  let user = row && row.length > 0 ? row[0] : {};
  return user;
};

const updateUserById = async (email, name, city, userId) => {
  let [row, fields] = await connection.query(
    `UPDATE Users 
    SET email = ?, name = ?, city= ?
    WHERE id = ?
    `,
    [email, name, city, userId]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
};

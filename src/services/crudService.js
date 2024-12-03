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
const createUser = async (email, name, city) => {
  let [row, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
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
const deleteUserById = async (id) => {
  let [row, fields] = await connection.query(`DELETE FROM Users WHERE id = ?`, [
    id,
  ]);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

import connection from "../config/db_connection.js";

export const readRoleIdByName = (role) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT id FROM roles WHERE role= ?",
      role,
      (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

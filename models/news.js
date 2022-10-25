import connection from "../config/db_connection.js";

export const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM list_news", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

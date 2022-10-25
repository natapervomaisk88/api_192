import config from "./main.js";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: config.DB.HOST,
  port: config.DB.PORT,
  user: config.DB.USER,
  password: config.DB.PASSWORD,
  database: config.DB.DATABASE,
});
export default connection;

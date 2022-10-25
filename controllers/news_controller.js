import { findAll } from "../models/news.js";

export const getAll = (req, res, next) => {
  findAll().then((result) => {
    req.news = result;
    next();
  });
};

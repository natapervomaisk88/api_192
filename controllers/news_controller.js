import {
  findAll,
  create,
  deleteAllNews,
  readNewsById,
  updateNewsById,
} from "../models/news.js";

export const getAllNews = (req, res, next) => {
  findAll()
    .then((result) => {
      if (result.length == 0) {
        return res.json({ error: false, message: "Не має жодної новини" });
      }
      req.news = result;
      next();
    })
    .catch(() => {
      return res.json({ error: true, message: "Не вдалось отримати новини" });
    });
};
export const insertNews = (req, res, next) => {
  create(req.body)
    .then(() => {
      next();
    })
    .catch(() => {
      return res.json({ error: true, message: "Змініть назву новини" });
    });
};
export const removeAllNews = (req, res, next) => {
  deleteAllNews()
    .then(() => {
      next();
    })
    .catch((err) => {
      return res.json({ error: true, message: "Новини не видалені" });
    });
};

export const getNewsById = (req, res, next) => {
  readNewsById(req.params.id)
    .then((result) => {
      if (result.length == 0) {
        return res.json({ error: true, message: "Новину не знайдено" });
      }
      req.news = result;
      next();
    })
    .catch((err) => {
      return res.json({ error: true, message: "Новину не знайдено" });
    });
};

export const editNewsById = (req, res, next) => {
  updateNewsById(req.body, req.params.id)
    .then((result) => {
      if (result.affectedRows == 0) {
        return res.json({
          error: true,
          message: "Редагування не вдалося. Немає такої новини",
        });
      }
      next();
    })
    .catch((err) => {
      return res.json({ error: true, message: "Редагування не вдалося" });
    });
};

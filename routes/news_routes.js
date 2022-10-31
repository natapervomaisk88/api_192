import { Router } from "express";
import {
  getAllNews,
  insertNews,
  removeAllNews,
  getNewsById,
  editNewsById,
} from "../controllers/news_controller.js";
const router = Router();

router
  .route("/news")
  .get(getAllNews, (req, res) => {
    res.json({ error: false, message: "Перелік новин", news: req.news });
  })
  .post(insertNews, (req, res) => {
    res.json({ error: false, message: "Новину успішно додано" });
  })
  .delete(removeAllNews, (req, res) => {
    res.json({ error: false, message: "Всі новини видалені" });
  });

router
  .route("/news/:id")
  .get(getNewsById, (req, res) => {
    res.json({
      error: false,
      message: `Новина ${req.params.id}`,
      news: req.news,
    });
  })
  .put(editNewsById, (req, res) => {
    res.json({
      error: false,
      message: `Редагування успішне`,
    });
  });

export default router;

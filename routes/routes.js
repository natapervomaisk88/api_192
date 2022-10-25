import { Router } from "express";
import { getAll } from "../controllers/news_controller.js";
const router = Router();
router.get("/news", getAll, (req, res) => {
  res.json(req.news);
});
export default router;

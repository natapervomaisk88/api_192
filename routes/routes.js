import { Router } from "express";
import newsRoutes from "./news_routes.js";
import userRoutes from "./user_routes.js";
const router = Router();

router.use(newsRoutes);
router.use(userRoutes);

export default router;

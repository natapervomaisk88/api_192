import express from "express";
import news_router from "./routes/news_routes.js";
import user_router from "./routes/user_routes.js";
import config from "./config/main.js";

const app = express();
app.use(express.json());
app.use(news_router);
app.use(user_router);
app.listen(config.PORT, () => {
  console.log(`http://localhost:${config.PORT}`);
});

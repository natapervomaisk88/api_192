import express from "express";
import router from "./routes/routes.js";
import config from "./config/main.js";

const app = express();
app.use(router);
app.listen(config.PORT, () => {
  console.log(`http://localhost:${config.PORT}`);
});



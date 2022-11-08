import { Router } from "express";
import { insertUser } from "../controllers/user_controller.js";
import {
  hasEmptyFields,
  isPasswordsEqual,
  isEmailUnique,
} from "../middleware/validation.js";
const router = Router();

router
  .route("/user")
  .post(hasEmptyFields, isPasswordsEqual, isEmailUnique, insertUser, (req, res) => {
    res.json({ error: false, token: req.token, message: "Користувача додано" });
  });

export default router;

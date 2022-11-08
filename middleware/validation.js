import { readUserByEmail } from "../models/user.js";
export const isPasswordsEqual = (req, res, next) => {
  if (req.body.password !== req.body.repeat_password) {
    return res.json({ error: true, message: "Паролі не збігаються" });
  }
  next();
};

export const hasEmptyFields = (req, res, next) => {
  const { name, email, password, repeat_password } = req.body;
  if (!name || !email || !password || !repeat_password) {
    return res.json({ error: true, message: "Є порожні поля" });
  }
  next();
};

export const isEmailUnique = (req, res, next) => {
  readUserByEmail(req.body.email)
    .then((result) => {
      if (result.length != 0) {
        return res.json({ error: true, message: "Email уже зареєстрован" });
      }
      next();
    })
    .catch(() => {
      return res.json({ error: true, message: "Помилка в БД" });
    });
};

import { create, readUserByEmail } from "../models/user.js";

// const isEmailUnique = (req, res, next) => {
//   readUserByEmail(req.body.email)
//     .then((result) => {
//       if (result.length == 0) {
//         next();
//       }
//       return res.json({ error: true, message: "Email уже зареєстрован" });
//     })
//     .catch(() => {
//       return res.json({ error: true, message: "Помилка в БД" });
//     });
// };

export const insertUser = (req, res, next) => {
  //валидация
  //пустота полей, сравнить пароли
  const { name, email, password, repeat_password } = req.body;
  if (password != repeat_password) {
    return res.json({ error: true, message: "Паролі не співпадають" });
  }
  create(req.body)
    .then(() => {
      next();
    })
    .catch(() => {
      return res.json({ error: true, message: "Змініть назву новини" });
    });
};

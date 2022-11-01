import { create, readUserByEmail } from "../models/user.js";
import { readRoleIdByName } from "../models/role.js";
import config from "../config/main.js";
import bcrypt from "bcryptjs";

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
  delete req.body.repeat_password;
  bcrypt.genSalt(config.SALT_SIZE, (err, salt) => {
    if (err) throw err;
    else {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) throw err;
        else {
          readRoleIdByName("user")
            .then((result) => {
              if (result.length) {
                req.body.password = hash;
                req.body.salt = salt;
                req.body.id_role = result[0].id;
                console.log(req.body);
                create(req.body)
                  .then(() => {
                    next();
                  })
                  .catch((err) => {
                    return res.json({ error: true, message: err });
                  });
              } else {
                return res.json({ error: true, message: "Немає ролі" });
              }
            })
            .catch(() => {
              return res.json({
                error: true,
                message: "Не вдалось зробити запит до БД",
              });
            });
        }
      });
    }
  });
};

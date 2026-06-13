import UserRepo from "../../repository/user.repository.js";
import env from "../../config/env.js";
import jwt from "jsonwebtoken";
import { app_config } from "../../constants/app.contant.js";

export default class AuthService {
  constructor() {
    this.userRepo = new UserRepo();
  }

  async CreateUser(user) {
    const isExist = await this.userRepo.findByEmail(user.emails[0].value);
    let result = isExist;

    if (!isExist) {
      const newUser = this.userRepo.create({
        email: user.emails[0].value,
        picture: user.photos[0].value,
        name: user.displayName,
      });
      result = newUser;
    }

    const data = {
      _id: result._id,
      email: user.emails[0].value,
      name: user.displayName,
    };

    const refreshToken = jwt.sign(data, env.REFRESH_TOKEN_SECRET,app_config.refreshToken);

    const accessToken = jwt.sign(data, env.ACCESS_TOKEN_SECRET, app_config.accessToken);

    return { accessToken, refreshToken };
  }
}

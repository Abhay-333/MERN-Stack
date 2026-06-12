// mongodb query
import UserModel from "../models/user.model";

export default class UserRepo {
  async create(payload) {
    return await UserModel.create(payload);
  }
  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }
  async findById(id) {
    return await UserModel.findById(id);
  }
}

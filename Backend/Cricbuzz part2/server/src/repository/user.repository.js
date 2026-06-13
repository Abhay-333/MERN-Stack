// mongodb query
import UserModel from "../models/user.model.js";

export default class UserRepo {
  async create(payload) {
    return await UserModel.create(payload);
  }
  async findByEmail(email) {
    return await UserModel.findOne({ email }).lean(); // lean() se user ka object milta hai without it returns document
  }
  async findById(id) {
    return await UserModel.findById(id);
  }
}

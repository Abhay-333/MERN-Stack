import UserRepo from "../../repository/user.repository";

export default class AuthService {
  constructor() {
    this.userRepo = new UserRepo();
  }

  async CreateUser(user) {
    this.userRepo.create(user);
  }
}

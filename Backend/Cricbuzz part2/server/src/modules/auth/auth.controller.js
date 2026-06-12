import AuthService from "./auth.service"

export default class AuthController{
    constructor(){
        this.userService = new AuthService()
    }
}
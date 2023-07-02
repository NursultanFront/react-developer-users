import { NewUser } from "./types/index";
import { AxiosInstance } from "axios";
import { BasicRest } from "../basic-rest";
import { User } from "./types";

export class UserRest extends BasicRest {
  constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public getUsers() {
    return this.getRequest<User[]>("/users");
  }

  public addUser(user: NewUser) {
    return this.postRequest("/users", user);
  }
}

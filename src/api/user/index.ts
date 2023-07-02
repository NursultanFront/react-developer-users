import { NewUser } from "./types/index";
import axios, { AxiosInstance } from "axios";
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

  public activateEmail(id: number) {
    return this.patchRequest(`/users/${id}`, { isActivate: true });
  }

  public deleteUser(id: number) {
    return this.deleteRequest(`/users/${id}`);
  }

  public changePermission({
    id,
    permissions,
  }: {
    id: number;
    permissions: string[];
  }) {
    return this.patchRequest(`/users/${id}`, { permissions });
  }
}

import { AxiosInstance } from "axios";
import { BasicRest } from "../basic-rest";

export class UserRest extends BasicRest {
  constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public getUsers() {}
}

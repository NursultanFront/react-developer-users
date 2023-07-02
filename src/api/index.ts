import axios from "axios";
import { UserRest } from "./user";

class Api {
  private readonly endpoint;
  public user;

  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.user = new UserRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: "http://localhost:4000",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const api = new Api();

import axios from "axios";

class Api {
  private readonly endpoint;

  public constructor() {
    this.endpoint = Api.createEndpoint();
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: process.env.REACT_APP_DB_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const api = new Api();

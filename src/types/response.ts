import { ServerResponse } from "node:http";

export class Response {
  constructor(private response: ServerResponse) {
    this.response = response;
  }
}

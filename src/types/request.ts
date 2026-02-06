import { IncomingMessage } from "node:http";

export class Request {
  constructor(private request: IncomingMessage) {
    this.request = request;
  }
  params: Record<string, any> = {};
}

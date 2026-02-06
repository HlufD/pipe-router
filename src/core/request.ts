import { IncomingHttpHeaders, IncomingMessage } from "node:http";
import { HTTP_METHODS } from "../enums/methods.enum";

export class Request {
  raw: IncomingMessage;
  params: Record<string, string> = {};
  headers: IncomingHttpHeaders;
  method: HTTP_METHODS;
  url: string;
  path: string;

  constructor(raw: IncomingMessage) {
    this.raw = raw;
    this.headers = raw.headers;
    this.url = raw.url || "/";
    this.path = this.url.split("?")[0];
    this.method = raw.method as HTTP_METHODS;
  }
}

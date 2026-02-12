import { ServerResponse } from "node:http";

export class Response {
  raw: ServerResponse;
  constructor(raw: ServerResponse) {
    this.raw = raw;
  }

  status(code: number) {
    this.raw.statusCode = code;
    return this;
  }

  json(data: Record<string, any>) {
    this.raw.setHeader("Content-Type", "application/json");
    this.end(JSON.stringify(data));
  }

  end(text: string) {
    this.raw.end(text);
  }
}

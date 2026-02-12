import { ServerResponse } from "node:http";

export class Response {
  raw: ServerResponse;
  constructor(raw: ServerResponse) {
    this.raw = raw;
  }

  public status(code: number) {
    this.raw.statusCode = code;
    return this;
  }

  public end(text: string) {
    this.raw.end(text);
  }

  public json(data: Record<string, any>) {
    this.raw.setHeader("Content-Type", "application/json");
    this.end(JSON.stringify(data));
  }

  public send() {}

  public jsonp() {}

  public sendStatus() {}

  public set() {}

  public get() {}

  public type() {}

  public location() {}

  public links() {}

  public vary() {}

  public append() {}

  public cookie() {}

  public clearCookie() {}

  public redirect() {}

  public format() {}

  public attachment() {}

  public download() {}

  public charset() {}

  public getHeaderNames() {}
}

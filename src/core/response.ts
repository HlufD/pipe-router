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

  public set(field: string, value: string): this;
  public set(headers: Record<string, string>): this;
  public set(filed: string | Record<string, string>, value?: string): this {
    if (typeof filed === "string") {
      if (value == undefined)
        throw new Error("Value is required when field is a string");

      this.raw.setHeader(filed, value);
    } else {
      for (const key in filed) {
        this.raw.setHeader(key, filed[key]);
      }
    }
    return this;
  }

  public get(field: string): string | number | string[] | undefined {
    return this.raw.getHeader(field);
  }

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

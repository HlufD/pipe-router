import { HTTP_METHODS } from "../enums/methods.enum";

import { RouteHandler } from "../types/route-handler";
import { RouteDefinition, Router } from "../types/router";

interface Layer {
  prefix: string;
  routes: RouteDefinition[];
}

class RouterBuilder {
  constructor(
    private path: string,
    private router: PipeRouter,
  ) {
    this.path = path;
  }

  get(...handlers: RouteHandler[]): this {
    this.router.addRoutes({
      handlers,
      method: HTTP_METHODS.GET,
      path: this.path,
    });
    return this;
  }

  post(...handlers: RouteHandler[]): this {
    this.router.addRoutes({
      handlers,
      method: HTTP_METHODS.POST,
      path: this.path,
    });
    return this;
  }

  put(...handlers: RouteHandler[]): this {
    this.router.addRoutes({
      handlers,
      method: HTTP_METHODS.PUT,
      path: this.path,
    });
    return this;
  }

  delete(...handlers: RouteHandler[]): this {
    this.router.addRoutes({
      handlers,
      method: HTTP_METHODS.DELETE,
      path: this.path,
    });
    return this;
  }

  patch(...handlers: RouteHandler[]): this {
    this.router.addRoutes({
      handlers,
      method: HTTP_METHODS.PATCH,
      path: this.path,
    });
    return this;
  }
}

export class PipeRouter implements Router {
  private readonly routes: RouteDefinition[] = [];
  private readonly layers: Layer[] = [];

  public get(path: string, ...handlers: RouteHandler[]): void {
    this.routes.push({ handlers, path, method: HTTP_METHODS.GET });
  }

  public post(path: string, ...handlers: RouteHandler[]): void {
    this.routes.push({ handlers, path, method: HTTP_METHODS.POST });
  }

  public put(path: string, ...handlers: RouteHandler[]): void {
    this.routes.push({ handlers, path, method: HTTP_METHODS.PUT });
  }

  public delete(path: string, ...handlers: RouteHandler[]): void {
    this.routes.push({ handlers, path, method: HTTP_METHODS.DELETE });
  }

  public patch(path: string, ...handlers: RouteHandler[]): void {
    this.routes.push({ handlers, path, method: HTTP_METHODS.PATCH });
  }

  public use(prefix: string, router: PipeRouter): void {
    if (router === this) {
      throw new Error("Cannot use the same router as a sub-router.");
    }

    this.layers.push({ prefix, routes: router.routes });
  }
  public route(path: string) {
    return new RouterBuilder(path, this);
  }

  public addRoutes(route: RouteDefinition) {
    this.routes.push(route);
  }

  public collectRoutes(router: PipeRouter) {
    const { routes, layers } = router;

    const collectedRoutes: RouteDefinition[] = [...routes];

    for (const layer of layers) {
      const prefix = layer.prefix;
      const subRoutes = layer.routes;

      for (const subRoute of subRoutes) {
        collectedRoutes.push({
          ...subRoute,
          path: `${prefix}${subRoute.path}`,
        });
      }
    }

    return collectedRoutes;
  }
}

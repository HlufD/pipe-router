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
    this.layers.push({ prefix, routes: router.routes });
  }
  public route(path: string) {
    return new RouterBuilder(path, this);
  }

  public addRoutes(route: RouteDefinition) {
    this.routes.push(route);
  }

  public collectRoutes(router: PipeRouter) {
    const routes: RouteDefinition[] = [];

    const { routes: originalRoutes, layers } = router;

    routes.push(...originalRoutes);

    for (let i = 0; i < layers.length; i++) {
      const { prefix, routes: layerRoutes } = layers[i];
      for (let j = 0; j < layerRoutes.length; j++) {
        const path = `${prefix.trimEnd()}${layerRoutes[j].path}`;
        console.log(path.trim());
        routes.push({
          ...layerRoutes[j],
          path,
        });
      }
    }

    return routes;
  }
}

import { HTTP_METHODS } from "../enums/methods.enum";
import { RouteHandler } from "../types/route-handler";
import { Router, Routes } from "../types/router";


export class PipeRouter implements Router {

    private routes: Routes[] = []

    get(url: string, routeHandler: RouteHandler): void {
        this.routes.push({ path: url, method: HTTP_METHODS.GET, handler: routeHandler })
    }

    post(url: string, routeHandler: RouteHandler): void {
        this.routes.push({ path: url, method: HTTP_METHODS.POST, handler: routeHandler })
    }

    put(url: string, routeHandler: RouteHandler): void {
        this.routes.push({ path: url, method: HTTP_METHODS.PUT, handler: routeHandler })
    }

    delete(url: string, routeHandler: RouteHandler): void {
        this.routes.push({ path: url, method: HTTP_METHODS.DELETE, handler: routeHandler })
    }

    patch(url: string, routeHandler: RouteHandler): void {
        this.routes.push({ path: url, method: HTTP_METHODS.PATCH, handler: routeHandler })
    }

    match(method: string, path: string) {
        return this.routes.find(
            route => route.method.toLowerCase() === method.toLowerCase() && route.path === path
        );
    }
}
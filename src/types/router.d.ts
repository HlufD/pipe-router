import { RouteHandler } from "./route-handler";

interface Router {
    get(url: String, routHandler: RouteHandler): void;

    post(url: String, routHandler: RouteHandler): void;

    put(url: String, routHandler: RouteHandler): void;

    delete(url: String, routHandler: RouteHandler): void;

    patch(url: String, routHandler: RouteHandler): void;

}

interface Routes {
    method: string,
    path: string,
    handler: RouteHandler
}
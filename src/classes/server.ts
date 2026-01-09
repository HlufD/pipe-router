import { createServer, IncomingMessage, Server, ServerResponse } from "node:http"

import { PipeRouter } from "./router";
import { Request } from "../types/request";
import { Response } from "../types/response";
export class PipeServer {

    private router: PipeRouter;

    constructor(router: PipeRouter) {
        this.router = router;
    }

    public listen(port: number, callback?: () => void) {
        const server = createServer(this.handleRequest.bind(this))
        server.listen(port, callback)
    }

    private handleRequest(req: IncomingMessage, res: ServerResponse) {
        const request = {
            raw: req,
            path: req.url || "/",
            method: req.method || "GET",
            params: {}
        };

        const response: Response = {
            raw: res
        };

        const matchedRoute = this.router.match(request.method, request.path);

        if (matchedRoute) {
            matchedRoute.handler(request, response);
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("Not Found");
        }
    }
}

import { IncomingMessage } from "node:http"

interface Request {
    raw: IncomingMessage
}
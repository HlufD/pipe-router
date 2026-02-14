import { Request } from "../core/request";
import { Response } from "../core/response";
import { NextFunction } from "./next-function";

type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>;

import { NextFunction } from "./next-function";
import { Request } from "./request";
import { Response } from "./response";

type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>;

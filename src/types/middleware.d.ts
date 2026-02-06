import { Request } from "../core/request";
import { Response } from "../core/response";

type NextFunction = () => void;

type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>;

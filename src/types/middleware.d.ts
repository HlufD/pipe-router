import { Request } from "./request";
import { Response } from "./response";

type NextFunction = () => void;

type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>;

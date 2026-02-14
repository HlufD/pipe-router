import { Request } from "./request";
import { Response } from "./response";

type RouteHandler = (
  req: Request,
  res: Response,
  next?: NextFunction,
) => void | Promise<void> | any;

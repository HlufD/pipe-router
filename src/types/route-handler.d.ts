import { Request } from "../core/request";
import { Response } from "../core/response";

type RouteHandler = (
  req: Request,
  res: Response,
  next?: NextFunction,
) => void | Promise<void> | any;

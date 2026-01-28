import { PipeRouter } from "./core/router";
import { PipeServer } from "./core/server";
import { NextFunction } from "./types/middleware";
import { Request } from "./types/request";
import { Response } from "./types/response";

const router = new PipeRouter();
const server = new PipeServer(router);

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("This runs first");
  next();
});

router.get("/", async (req: Request, res: Response) => {
  console.log("this runs second");
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("Server is running on port: 3000");
});

import { Request } from "./core/request";
import { Response } from "./core/response";
import { PipeRouter } from "./core/router";
import { PipeServer } from "./core/server";
import { NextFunction } from "./types/middleware";

export { PipeServer } from "./core/server";

const userRouter = new PipeRouter();

userRouter.get("/users", (eq: Request, res: Response) => {
  res.json({ users: [{ name: "John" }] });
});

userRouter.get("/users/:id", (req: Request, res: Response) => {
  return res.json({ userId: req.params.id });
});

const app = new PipeServer();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("this is from the middleware.");
  next();
});

app.use("/api", userRouter);

app.use("/some", (req: Request, res: Response, next: NextFunction) => {});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});

console.dir(app, { depth: null });

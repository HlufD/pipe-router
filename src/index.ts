import { Request } from "./core/request";
import { Response } from "./core/response";
import { PipeRouter } from "./core/router";
import { PipeServer } from "./core/server";

export { PipeServer } from "./core/server";

const userRouter = new PipeRouter();

userRouter.get("/users", (eq: Request, res: Response) => {
  res.json({ users: [{ name: "Hluf" }] });
});

userRouter.get("/users/:id", (req: Request, res: Response) => {
  return res.json({ userId: req.params.id });
});

const app = new PipeServer();

app.use("/api", userRouter); // route mounting

app.listen(3001, () => {
  console.log("server is running on port 3000");
});

app.use("/some", (req: Request, res: Response) => {});

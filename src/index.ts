import { PipeRouter } from "./core/router";
import { PipeServer } from "./core/server";

//const router = new PipeRouter();
// const router2 = new PipeRouter();

// router.get("/users", () => {
//   console.log("/users");
// });

// router.get("/users/:id", () => {
//   console.log("/users/:id");
// });

// router2.use("/api/v1", router);
// router2.use("/api/v2", router);

// router.get("/users/:id/*", () => {
//   console.log("/users/:id");
// });

// // router
// //   .route("/some/:id")
// //   .get(() => {})
// //   .delete(() => {})
// //   .patch(() => {});

// // console.dir(router, { depth: null });
// // console.log("-----------------------------");
// // console.dir(router2, { depth: null });

// console.log(router2.collectRoutes(router2));
// console.log(router
// 2.collectRoutes(router));

// const users = new PipeRouter();
// const admin = new PipeRouter();
// const app = new PipeRouter();

// users.get("/users", () => {});
// admin.get("/admin", () => {});

// users.use("/admin", admin);
// app.use("/api", users);

// console.log("-----------USERS--------------");
// console.dir(users, { depth: null });
// console.log("----------ADMIN------------------");
// console.dir(admin, { depth: null });
// console.log("----------APP--------------");
// console.dir(app, { depth: null });

// console.log(app.collectRoutes(app));

export { PipeServer } from "./core/server";

const userRouter = new PipeRouter();
userRouter.get("/users", () => {
  console.log("Get all users");
});

userRouter.get("/users/:id", () => {
  console.log("Get user by ID");
});
const app = new PipeServer();

app.use("/api", userRouter);
app.post("/api/users", [() => {}, () => {}]);

console.dir(app.routes, { depth: null });

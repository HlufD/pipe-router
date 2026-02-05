import { PipeRouter } from "./core/router";

const router = new PipeRouter();
const router2 = new PipeRouter();

router.get("/users", () => {
  console.log("/users");
});

router.get("/users/:id", () => {
  console.log("/users/:id");
});

router2.use("/api/v1", router);
router2.use("/api/v2", router);

router.get("/users/:id/*", () => {
  console.log("/users/:id");
});

// router
//   .route("/some/:id")
//   .get(() => {})
//   .delete(() => {})
//   .patch(() => {});

// console.dir(router, { depth: null });
// console.log("-----------------------------");
// console.dir(router2, { depth: null });

console.log(router2.collectRoutes(router2));
console.log(router2.collectRoutes(router));

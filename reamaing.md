## Remaining Features to Implement

### Constrained Dynamic Segments (`:id(\d+)`)

- **Status:** ❌ Not implemented
- **Needed:**

  - Store a regex per dynamic segment.
  - Validate the segment against the regex during `match()`.

- **Effect:** Allows routes like `/users/:id(\d+)` to match numbers only.

### Dynamic Segment Priority

- **Status:** ❌ Not implemented
- **Needed:**

  - When multiple dynamic segments exist at the same Trie node, constrained dynamic segments should match before unconstrained ones.

- **Effect:** Ensures correct matching when multiple dynamic routes coexist, e.g., `:id(\d+)` vs `:name`.

---

## Features Intentionally Not Supported

### Optional Trailing Slash

- **Reason:** To keep behavior consistent with Express style, optional trailing slashes are not supported.

### Optional + Wildcard Combos (`:id?/*`)

- **Reason:** Fastify does not support these combinations; our router does not either.

---

## Summary Table

| Feature                        | Status | Notes                                                |
| ------------------------------ | ------ | ---------------------------------------------------- |
| Static segment                 | ✅     | Highest priority                                     |
| Dynamic segment                | ✅     | Medium priority                                      |
| Wildcard segment               | ✅     | Lowest priority                                      |
| Constrained dynamic            | ❌     | Needs regex storage and validation                   |
| Dynamic segment priority       | ❌     | Needs priority handling for multiple dynamic options |
| Optional parameters (`:id?`)   | ✅     | Matches with or without segment                      |
| Optional trailing slash        | ❌     | Not supported (Express style)                        |
| Optional + wildcard (`:id?/*`) | ❌     | Not supported (matches Fastify)                      |

---

**Conclusion:**

- The Trie router correctly supports optional parameters and other standard Fastify behaviors.
- The remaining work is focused on implementing constrained dynamic segments and dynamic segment priority.

### OpenFaas Templates

- <a name="node-lts-express" href="template/node-lts-express">node-lts-express</a>
  - Applies handler as middleware using [`app.use()`][app.use] without a path argument, the default implementation provides a router.
  - Allows for all native express functionality including middleware at the router level to be used.
  
- <a name="node-lts-express-authenticated" href="template/node-lts-express-authenticated">node-lts-express-authenticated</a>
  - Authenticates all requests prior to executing custom handler middleware.
  - Same as [`node-lts-express`](#node-lts-express)
  
[app.use]: https://expressjs.com/en/api.html#app.use
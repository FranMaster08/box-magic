// this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/pos.controller";
import * as Express from "express";
// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [UserController], // we specify controllers we want to use
});

app.use(Express.json());
// run express application on port 3000
app.listen(3000, () => {
  console.log(`Running on port 3000`);
});

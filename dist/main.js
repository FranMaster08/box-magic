"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const store_controller_1 = require("./controllers/store.controller");
const pos_controller_1 = require("./controllers/pos.controller");
const Express = require("express");
const app = (0, routing_controllers_1.createExpressServer)({
    controllers: [store_controller_1.StoreController, pos_controller_1.PosController],
});
app.use(Express.json());
app.listen(3000, () => {
    console.log(`Running on port 3000`);
});
//# sourceMappingURL=main.js.map
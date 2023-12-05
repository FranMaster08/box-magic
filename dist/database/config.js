"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const PGP = require("pg-promise");
const pgp = PGP();
const connection = {
    user: "user",
    host: "host",
    database: "data",
    password: "pass",
    port: 5432,
};
const db = pgp(connection);
exports.db = db;
//# sourceMappingURL=config.js.map
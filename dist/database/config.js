"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const PGP = require("pg-promise");
const pgp = PGP();
const connection = {
    user: "cw_cl_pos_registry",
    host: "cencopay-postgresql-test-qa.c7kdyxer59ah.us-east-1.rds.amazonaws.com",
    database: "cw_cl_pos_registry",
    password: "NmA279",
    port: 5432,
};
const db = pgp(connection);
exports.db = db;
//# sourceMappingURL=config.js.map
import * as PGP from "pg-promise";
const pgp = PGP()

const connection = {
    user: "user",
    host: "host",
    database: "data",
    password: "pass",
    port: 5432,
};

const db: PGP.IDatabase<any> = pgp(connection);

export { db };
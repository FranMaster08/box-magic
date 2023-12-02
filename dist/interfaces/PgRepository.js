"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgRepository = void 0;
const config_1 = require("../database/config");
class PgRepository {
    constructor() {
        this.db = config_1.db;
    }
    getAll() {
        return this.db.any("SELECT * FROM store s LIMIT 1;");
    }
    getOne(id) {
        return this.db.oneOrNone("SELECT * FROM tu_tabla WHERE id = $1", id);
    }
    create(dto) {
        return this.db.one("INSERT INTO tu_tabla(${this.db.helpers.columns(dto)}) VALUES(${this.db.helpers.values(dto)}) RETURNING *", dto);
    }
    update(dto, id) {
        return this.db.oneOrNone("UPDATE tu_tabla SET ${this.db.helpers.sets(dto)} WHERE id = $1 RETURNING *", [id, dto]);
    }
    deleted(id) {
        return this.db.oneOrNone("DELETE FROM tu_tabla WHERE id = $1 RETURNING *", id);
    }
}
exports.PgRepository = PgRepository;
//# sourceMappingURL=PgRepository.js.map
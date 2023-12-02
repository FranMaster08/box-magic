import { Repository } from "./repositorio";
import { db } from "../database/config";
import * as PGP from "pg-promise";
export class PgRepository<T> implements Repository<T> {
  private db: PGP.IDatabase<any>;
  constructor() {
    this.db = db;
  }

  getAll(): Promise<T[]> {
    return this.db.any("SELECT * FROM store s LIMIT 1;");
  }

  getOne(id: number): Promise<T | null> {
    return this.db.oneOrNone("SELECT * FROM tu_tabla WHERE id = $1", id);
  }

  create(dto: T): Promise<T> {
    return this.db.one(
      "INSERT INTO tu_tabla(${this.db.helpers.columns(dto)}) VALUES(${this.db.helpers.values(dto)}) RETURNING *",
      dto
    );
  }

  update(dto: T, id: number): Promise<T | null> {
    return this.db.oneOrNone(
      "UPDATE tu_tabla SET ${this.db.helpers.sets(dto)} WHERE id = $1 RETURNING *",
      [id, dto]
    );
  }

  deleted(id: number): Promise<T | null> {
    return this.db.oneOrNone(
      "DELETE FROM tu_tabla WHERE id = $1 RETURNING *",
      id
    );
  }
}

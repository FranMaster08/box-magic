import { PgRepository } from "../interfaces/PgRepository";
import { Pos } from "../entites/pos.entity";
import { LocalRepository } from "../interfaces/local.repository";
import { Repository } from "../interfaces/repositorio";

export class PosService {
  private repository: Repository<Pos>;

  constructor() {
    // HERENCIA , POLIMORFISMO
    this.repository = new LocalRepository<Pos>();
  }

  async findAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createPos(pos: Pos): Promise<Pos> {
    try {
      const response = await this.repository.create(pos);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

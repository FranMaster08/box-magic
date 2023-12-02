import { PgRepository } from "../interfaces/PgRepository";
import { Store } from "../entites/store.entity";
import { LocalRepository } from "../interfaces/local.repository";
import { Repository } from "../interfaces/repositorio";

export class StoreService {
  private repository: Repository<Store>;

  constructor() {
    // HERENCIA , POLIMORFISMO
    this.repository = new LocalRepository<Store>();
  }

  async findAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createStore(store: Store): Promise<Store> {
    try {
      const response = await this.repository.create(store);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

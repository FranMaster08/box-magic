import { Repository } from "./repositorio";

export class LocalRepository<T> implements Repository<T> {
  private data: T[];
  constructor() {
    this.data = [];
  }
  getAll(): Promise<T[]> {
    return Promise.resolve(this.data);
  }
  getOne(id: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      try {
        const item = this.data.find((item, index) => index === id);
        if (item) {
          resolve(item);
        } else {
          throw "No se encontro data";
        }
      } catch (error) {
        throw new Error(error);
      }
    });
  }
  async create(dto: T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.data.push(dto);
      resolve(dto);
    })
   
  }

  async update(dto: T, id?: number): Promise<T> {
    if (id !== undefined && id < this.data.length) {
      this.data[id] = dto;
      return dto;
    } else {
      throw new Error(`Invalid id ${id} for update`);
    }
  }

  async deleted(id: number): Promise<T> {
    if (id < this.data.length) {
      const deletedItem = this.data.splice(id, 1)[0];
      return deletedItem;
    } else {
      throw new Error(`Invalid id ${id} for deletion`);
    }
  }
}

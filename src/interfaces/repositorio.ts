export interface Repository<T> {
  getAll(): Promise<T[]>;
  getOne(id:number): Promise<T>;
  create(dto: T): Promise<T>;
  update(dto: T, id?: number): Promise<T>;
  deleted(id: number): Promise<T>;
}

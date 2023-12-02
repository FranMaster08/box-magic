import { Store } from "../entites/store.entity";

export class StoreDto {
  name: string;
  isActive: boolean;

  constructor(name: string, isActive: boolean) {
    this.name = name;
    this.isActive = isActive;
  }
}

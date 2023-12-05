export class StoreDto {
  name: string;
  isActive: boolean;
  constructor(name: string, isActive: boolean) {
    this.name = name;
    this.isActive = isActive;
  }
}

import "reflect-metadata";
import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
} from "routing-controllers";
import { StoreService } from "../services/store.service";
import { StoreDto } from "../dto/store.dto";

@JsonController()
export class UserController {
  private service: StoreService;
  constructor() {
    this.service = new StoreService();
  }

  @Get("/users")
  async getAll() {
    return await this.service.findAll();
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post("/users")
  async post(@Body() store: StoreDto) {
    const response = await this.service.createStore({
      id: "1",
      ...store,
    });
    console.log(response);
    return response;
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}

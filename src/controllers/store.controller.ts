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
export class StoreController {
  private service: StoreService;
  constructor() {
    this.service = new StoreService();
  }

  @Get("/stors")
  async getAll() {
    return await this.service.findAll();
  }

  @Get("/stors/:id")
  getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post("/stors")
  async post(@Body() store: StoreDto) {
    const response = await this.service.createStore({
      id: "1",
      ...store,
    });
    console.log(response);
    return response;
  }

  @Put("/stors/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/stors/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
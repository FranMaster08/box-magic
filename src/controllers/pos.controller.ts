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
import { PosService } from "../services/pos.service";
import { PosDto } from "../dto/pos.dto";

@JsonController()
export class PosController {
  private service: PosService;
  constructor() {
    this.service = new PosService();
  }

  @Get("/pos")
  async getAll() {
    return await this.service.findAll();
  }

  @Get("/pos/:id")
  getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post("/pos")
  async post(@Body() pos: PosDto) {
    const response = await this.service.createPos({
      posId: 1,
      ...pos,
    });
    console.log(response);
    return response;
  }

  @Put("/pos/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/pos/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
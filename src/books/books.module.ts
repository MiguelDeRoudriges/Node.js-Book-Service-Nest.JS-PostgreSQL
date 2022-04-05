import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Book} from "./books.model";

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
      SequelizeModule.forFeature([Book])
  ]
})
export class BooksModule {}
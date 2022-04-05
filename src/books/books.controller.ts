import {Body, Controller, Get, Post, UsePipes} from '@nestjs/common';
import {CreateBookDto} from "./dto/create-book.dto";
import { BooksService } from './books.service';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Book} from "./books.model";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Books')
@Controller('books')
export class BooksController {

    constructor(private  booksService: BooksService) {}

    @ApiOperation({summary: 'Adding book'})
    @ApiResponse({status: 200, type: Book})
    @UsePipes(ValidationPipe)
    @Post()
    add(@Body() bookDto: CreateBookDto) {
        return this.booksService.addBook(bookDto);
    }

    @ApiOperation({summary: 'Getting all the books'})
    @ApiResponse({status: 200, type: [Book]})
    @Get()
    getAll() {
        return this.booksService.getAllBooks();
    }
}

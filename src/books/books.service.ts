import { Injectable } from '@nestjs/common';
import {Book} from "./books.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateBookDto} from "./dto/create-book.dto";

@Injectable()
export class BooksService {
    constructor( @InjectModel(Book) private readonly bookRepository: typeof Book) {

    }

    async addBook(dto: CreateBookDto) {
        const book = await this.bookRepository.create(dto);
        return book;
    }

    async getAllBooks() {
        const books = await this.bookRepository.findAll();
        return books;
    }
}





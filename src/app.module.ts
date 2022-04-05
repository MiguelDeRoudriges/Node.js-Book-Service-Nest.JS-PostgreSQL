import {Module} from "@nestjs/common";

import {SequelizeModule} from "@nestjs/sequelize";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { BooksModule } from './books/books.module';
import {ConfigModule} from "@nestjs/config";
import {Book} from "./books/books.model";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports : [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Book],
            autoLoadModels: true
        }),
        BooksModule,
    ]
})
export class AppModule {}
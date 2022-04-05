import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateBookDto {

    @ApiProperty({example: 'Gulliver’s Travels', description:'Title of the book'})
    @IsString({message: 'Must be string'})
    readonly title: string;
    @ApiProperty({example: 'Jonathan Swift', description:'Author of the book'})
    @IsString({message: 'Must be string'})
    readonly author: string;
}

import {Model, Table, DataType, Column} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserBookAttribute {
    id: number;
    title: string;
    author: string;
}

@Table({tableName:'users'})
export class Book extends Model<Book,UserBookAttribute> {

    @ApiProperty({example: '1', description:'Unique identificator'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey:true})
    id: number;

    @ApiProperty({example: 'Gulliver’s Travels', description:'Title of the book'})
    @Column({type: DataType.STRING, allowNull:false})
    title: string;

    @ApiProperty({example: 'Jonathan Swift', description:'Author of the book'})
    @Column({type: DataType.STRING, allowNull:false})
    author: string;

}

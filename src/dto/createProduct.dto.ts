import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto{

    @IsNotEmpty()
    @IsString()
    productTitle:string;

    @IsNumber()
    @IsNotEmpty()
    productPrice:number;

    @IsNumber()
    @IsNotEmpty()
    quantity:number;

}
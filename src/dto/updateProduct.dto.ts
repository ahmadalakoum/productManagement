import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateProductDto{
    @IsNumber()
    @IsNotEmpty()
    productPrice?:number;

    @IsNumber()
    @IsNotEmpty()
    quantity?:number;
}
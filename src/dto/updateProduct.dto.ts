import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class UpdateProductDto{
    @IsNumber()
    @IsOptional()
    productPrice?:number;

    @IsNumber()
    @IsOptional()
    quantity?:number;
}
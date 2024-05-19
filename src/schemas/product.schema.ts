import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product{
    @Prop({required:true})
    productTitle:string;
    
    @Prop({required:true})
    productPrice:number;

    @Prop({required:true})
    quantity:number;


}

export const ProductSchema=SchemaFactory.createForClass(Product);
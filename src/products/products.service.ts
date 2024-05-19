import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { UpdateProductDto } from 'src/dto/updateProduct.dto';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name)private productModel:Model<Product>){}

    createProduct(createProductDto:CreateProductDto)
    {
        const newProduct= new this.productModel(createProductDto);
        return newProduct.save();
    }
    getProducts(){
        return this.productModel.find();
    }

    // get one product using the id
    getProductById(id:string){
        return this.productModel.findById(id);

    }
    // update a single product
    updateProduct(id:string,updateproductDto:UpdateProductDto)
    {
        return this.productModel.findByIdAndUpdate(id,updateproductDto);
    }
    // delete product
    deleteProduct(id:string)
    {
        return this.productModel.findByIdAndDelete(id);
    }



}

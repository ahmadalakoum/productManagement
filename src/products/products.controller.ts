import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private ProductsService:ProductsService){}

    // create a new product
    @Post()
    createProduct(@Body()createProductdto:CreateProductDto){
        return this.ProductsService.createProduct(createProductdto);
    }

    // find all products
    @Get()
    getProducts(){
        return this.ProductsService.getProducts();
    }

    // find a single product using the id
    @Get(':id')
     getProductById(@Param('id')id:string){
        const findProduct= this.ProductsService.getProductById(id);
        if(!findProduct)
            {
                throw new HttpException("product not found",404);
            }
        return findProduct;
    }

}

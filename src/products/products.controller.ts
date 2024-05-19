import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private ProductsService:ProductsService){}

    @Post()
    createProduct(@Body()createProductdto:CreateProductDto){
        return this.ProductsService.createProduct(createProductdto);
    }
}

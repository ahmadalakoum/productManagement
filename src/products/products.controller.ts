import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/createProduct.dto';
import { ProductsService } from './products.service';
import { UpdateProductDto } from 'src/dto/updateProduct.dto';

@Controller('products')
export class ProductsController {
    constructor(private ProductsService:ProductsService){}

    // create a new product
    @Post()
    async createProduct(@Body()createProductdto:CreateProductDto){
        return await this.ProductsService.createProduct(createProductdto);
    }

    // find all products
    @Get()
    async getProducts(){
        return await  this.ProductsService.getProducts();
    }

    // find a single product using the id
    @Get(':id')
    async  getProductById(@Param('id')id:string){
        const findProduct= await this.ProductsService.getProductById(id);
        if(!findProduct)
            {
                throw new HttpException("product not found",404);
            }
        return findProduct;
    }

    // update a product
    @Patch(":id")
    async updateProduct(@Param('id')id:string,@Body()updateproductdto:UpdateProductDto)
    {
        const updatedProduct=await this.ProductsService.updateProduct(id,updateproductdto);
        if(!updatedProduct)
            throw new HttpException("product not found",404);
        return updatedProduct;
    }

    @Delete(":id")
    async  deleteproduct(@Param("id")id:string)
    {
        const deletedProduct= await this.ProductsService.deleteProduct(id);
        if(!deletedProduct)
            throw new HttpException("product not found",404);
        return {message:'the product is successfully deleted'};
    }

}

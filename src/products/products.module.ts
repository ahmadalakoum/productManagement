import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/schemas/product.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:Product.name,
    schema:ProductSchema,
  }])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
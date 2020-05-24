import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { ProductEntity } from 'src/product/product.entity';

@Controller('product')
export class ProductController {

    constructor(private readonly service : ProductService){}
    
    @Post()
    save(@Body() produto: Product) {
        return this.service.save(Product);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }

}
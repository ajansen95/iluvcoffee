import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get()
    findAll() {
        return 'This action returns all coffees'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} coffee`
    }

    @Get('flavors')
    findAllFlavors() {
        return 'This action returns all coffees flavors'
    }

    @Post()
    create(@Body() body) {
        return body
    }
}

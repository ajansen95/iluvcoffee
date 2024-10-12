import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { Public } from '../common/decorators/public.decorator';
import { CoffeesService } from './coffees.service';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { ParseIntPipe } from '../common/pipes/parse-int/parse-int.pipe';
import { Protocol } from '../common/decorators/protocol.decorator';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}

    @Public()
    @Get()
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    findAll(
        @Protocol('https') protocol: string,
        @Query() paginationQuery: PaginationQueryDto,
    ) {
        console.log(protocol);
        return this.coffeeService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        const coffee = this.coffeeService.findOne('' + id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id);
    }
}

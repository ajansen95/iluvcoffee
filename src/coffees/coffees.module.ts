import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';

class MockCoffeesService {}

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    providers: [
        { provide: CoffeesService, useValue: new MockCoffeesService() },
    ],
    controllers: [CoffeesController],
    exports: [CoffeesService],
})
export class CoffeesModule {}

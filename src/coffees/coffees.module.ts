import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { Event, EventSchema } from '../events/entities/event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Coffee.name, schema: CoffeeSchema },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  providers: [CoffeesService],
  controllers: [CoffeesController],
})
export class CoffeesModule {}

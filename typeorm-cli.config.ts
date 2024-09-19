import { DataSource } from 'typeorm';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1726752887774 } from './src/migrations/1726752887774-SchemaSync';
import { CoffeeRefactor1726752100697 } from './src/migrations/1726752100697-CoffeeRefactor';

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1726752100697, SchemaSync1726752887774],
});

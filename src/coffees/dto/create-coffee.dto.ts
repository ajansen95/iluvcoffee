import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffees.' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The brand of a coffees.' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ description: 'The flavors of a coffees.' })
  @IsString({ each: true })
  readonly flavors: string[];
}

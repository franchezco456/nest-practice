import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { HttpModule } from '@nestjs/axios';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [SeedController],
  imports: [HttpModule, PokemonModule],
  providers: [SeedService],
  exports: [SeedService]
})
export class SeedModule {}

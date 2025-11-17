import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [SeedController],
  imports: [HttpModule],
  providers: [SeedService],
  exports: [SeedService]
})
export class SeedModule {}

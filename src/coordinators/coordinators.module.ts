import { Module } from '@nestjs/common';
import { CoordinatorsController } from './coordinators.controller';

@Module({
  controllers: [CoordinatorsController]
})
export class CoordinatorsModule {}

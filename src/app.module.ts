import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { CoordinatorsModule } from './coordinators/coordinators.module';

@Module({
  imports: [StudentsModule, CoordinatorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

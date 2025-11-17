import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/Axios-Adapter';
import { HttpModule } from '@nestjs/axios';
import { PaginationDto } from './dto/pagination.dto';

@Module({
    imports: [HttpModule],
    providers: [AxiosAdapter],
    exports: [AxiosAdapter]
})
export class CommonModule {
}

import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/Axios-Adapter';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [AxiosAdapter],
    exports: [AxiosAdapter]
})
export class CommonModule {
}

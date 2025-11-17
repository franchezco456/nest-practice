import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from "rxjs";
import { httpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements httpAdapter {
    constructor(private http: HttpService) { }
    async get<T>(url: string): Promise<{ data: T }> {
        try {
            const response$ = this.http.get<T>(url);
            const response = await lastValueFrom(response$);
            return response;
        } catch (error) {
            throw new Error('Error in AxiosAdapter');
        }
    }
}
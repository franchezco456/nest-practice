import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from 'rxjs';
import { PokeApiResponse } from '../seed/interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  constructor(private http: HttpService) {
  }

  async executeSeed() {
    const response$ = await this.http.get <PokeApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=100')
    const {data} = await lastValueFrom(response$);

    data.results.forEach(({name , url}) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      console.log({name, no});
    }
  );
    return data.results;
  }
}

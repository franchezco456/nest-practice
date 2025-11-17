import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from 'rxjs';
import { PokeApiResponse } from '../seed/interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {

  constructor(private http: HttpService, private readonly pokemonService: PokemonService) {
  }

  async executeSeed() {
    const response$ = await this.http.get <PokeApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=1000')
    const {data} = await lastValueFrom(response$);

    data.results.forEach(async ({name , url}) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      await this.pokemonService.create({name, no});
      console.log(`Pokemon con el no ${no} y nombre ${name} creado exitosamente`);
    }
  );
    return data.results;
  }
}

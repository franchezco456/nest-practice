import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from 'rxjs';
import { PokeApiResponse } from '../seed/interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {

  constructor(private http: HttpService, private readonly pokemonService: PokemonService) {
  }

  async executeSeed() {
    const response$ = await this.http.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=1000')
    const { data } = await lastValueFrom(response$);
    let pokemons: Pokemon[] = [];
    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemons.push({ name, no } as Pokemon);
    }
    );
    await this.pokemonService.fillPokemonsWithSeed(pokemons);
    return "seed planted successfully";
  }
}

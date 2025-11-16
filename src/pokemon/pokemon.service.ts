import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { isMongoId, isString } from 'class-validator';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokeModel: Model<Pokemon>
  ) { }
  async create(createPokemonDto: CreatePokemonDto) {
    try {
      createPokemonDto.name = createPokemonDto.name.toLowerCase();
      const pokemon = await this.pokeModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return await this.pokeModel.find();
  }

  async findOne(term: string) {
    let pokemon: Pokemon | null = null;

    if (!isNaN(+term)) {
      pokemon = await this.pokeModel.findOne({ no: term });
      console.log("busqueda por no");
    }

    if (isString(term) && !pokemon) {
      pokemon = await this.pokeModel.findOne({ name: term.toLowerCase().trim() });
      console.log("busqueda por nombre");
    }

    if (isMongoId(term) && !pokemon) {
      pokemon = await this.pokeModel.findOne({ _id: term });
      console.log("busqueda por mongo id");
    }

    if (!pokemon) {
      throw new NotFoundException(`Pokemon not foud`);
    }

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne(term);

    if (updatePokemonDto.name) {
      updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
    }

    try {

      await pokemon.updateOne(updatePokemonDto, { new: true });
      return { ...pokemon.toJSON(), ...updatePokemonDto };

    } catch (error) {

      this.handleExceptions(error);

    }
  }


  async remove(term: string) {
    const {deletedCount} = await this.pokeModel.deleteOne({_id : term});
    if (deletedCount === 0) {
      throw new BadRequestException ("Pokemon not foud");
    }
  }

  handleExceptions(error: any) {
    if (error.code === 11000) {
        throw new BadRequestException(`Pokemon exist in db ${JSON.stringify(error.keyValue)}`);
      }
    throw new InternalServerErrorException(`Cant create pokemon, check server logs`);
  }
}

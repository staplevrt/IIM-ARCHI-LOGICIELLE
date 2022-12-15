import { Pokemon } from '../entities/pokemon'
import { CreatePokemonDTO } from '../dto/createPokemonDTO'

export interface PokemonGateway {
  listAll(): Promise<Array<Pokemon>>
  create(createPokemonDTO: CreatePokemonDTO): Promise<Pokemon>
  listOne(id : string):Promise<Pokemon>
}

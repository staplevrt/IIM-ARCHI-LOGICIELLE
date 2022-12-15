import { Pokemon } from '../entities/pokemon'
import { CreatePokemonDTO } from '../dto/createPokemonDTO'

export interface ProductGateway {
  listAll(): Promise<Array<Pokemon>>
  create(createPokemonDTO: CreatePokemonDTO): Promise<Pokemon>
  listOne(id : number):Promise<Pokemon>
}

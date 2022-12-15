import { PokemonGateway } from '../../core/gateways/pokemonGateway'
import { Pokemon } from '../../core/entities/pokemon'
import { UUIDGenerator } from '../../core/gateways/UUIDGenerator'
import { CreatePokemonDTO } from '../../core/dto/createPokemonDTO'

export class InMemoryPokemontGateway implements PokemonGateway {
  private pokemons: Array<Pokemon> = []
  private uuidGenerator: UUIDGenerator

  constructor(uuidGenerator: UUIDGenerator) {
    this.uuidGenerator = uuidGenerator
  }

  listAll(): Promise<Array<Pokemon>> {
    return Promise.resolve(this.pokemons)
  }

  listOne(id: string): Promise<Pokemon> {
    const pokemon = this.pokemons.find(e => e.id === id)
    if(pokemon) {
    return Promise.resolve(pokemon)
    }
    return Promise.reject()
  }

  feedWith(...pokemons: Array<Pokemon>) {
    this.pokemons = pokemons
  }

  create(createPokemontDTO: CreatePokemonDTO): Promise<Pokemon> {
    const pokemon: Pokemon = {
        id: this.uuidGenerator.generate(),
        name: createPokemontDTO.name,
        height: createPokemontDTO.height,
        health: createPokemontDTO.health,
        catchRate: createPokemontDTO.catchRate
    }
    this.pokemons.push(pokemon)
    return Promise.resolve(pokemon)
  }
}

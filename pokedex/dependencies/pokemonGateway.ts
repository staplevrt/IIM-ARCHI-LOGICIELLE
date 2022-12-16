import { InMemoryPokemontGateway } from '../src/adapters/secondary/InMemoryPokemonGateway'
import { Pokemon } from '../src/core/entities/pokemon'

const pokemonGateway = new InMemoryPokemontGateway()
const terre: Pokemon = {
    id: '1',
    name: 'Mew',
    height: 104,
    health: 120,
    catchRate: 7,
  }
  const electrique: Pokemon = {
    id: '2',
    name: 'pikachu',
    height: 104,
    health: 100,
    catchRate: 9,
  }
  const pierre: Pokemon = {
    id: '3',
    name: 'onix',
    height: 280,
    health: 90,
    catchRate: 8,
  }
  const air: Pokemon = {
    id: '4',
    name: 'togekiss',
    height: 411,
    health: 102,
    catchRate: 7,
  }
  const fire: Pokemon = {
    id: '4',
    name: 'delcatty',
    height: 307,
    health: 104,
    catchRate: 7,
  }
pokemonGateway.feedWith(fire, air)
export default pokemonGateway

import { usePokemonStore } from '../../../store/pokemonStore'
import { createPinia, setActivePinia } from 'pinia'
import { listAllPokemon } from './listAllPokemon'
import { InMemoryPokemontGateway } from '../../../adapters/secondary/inMemoryPokemonGateway'
import { Pokemon } from '../../entities/pokemon'
import { FakeUUIDGenerator } from '../../../adapters/secondary/fakeUUIDGenerator'

describe('List all pokemon', () => {
  let pokemonGateway: InMemoryPokemontGateway
  beforeEach(() => {
    setActivePinia(createPinia())
    pokemonGateway = new InMemoryPokemontGateway(new FakeUUIDGenerator())
  })
  it('should have [] when there is no pokemon', async () => {
    await whenListAllPokemon()
    expectPokemonStoreToContains()
  })
  it('should store all pokemon when there is pokemon', async () => {
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
    await whenListAllPokemon()
    expectPokemonStoreToContains(fire, air)
  })

  const whenListAllPokemon = async () => {
    await listAllPokemon(pokemonGateway)
  }

  const expectPokemonStoreToContains = (...pokemon: Array<any>) => {
    const pokemonStore = usePokemonStore()
    expect(pokemonStore.items).toEqual(pokemon)
  }
})
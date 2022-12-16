import { Pokemon } from '../../entities/pokemon'
import { usePokemonStore } from '../../../store/pokemonStore'
import { createPinia, setActivePinia } from 'pinia'
import { createPokemon } from './createPokemon'
import { InMemoryPokemontGateway} from '../../../adapters/secondary/InMemoryPokemonGateway'
import { FakeUUIDGenerator } from '../../../adapters/secondary/fakeUUIDGenerator'
import { CreatePokemonDTO } from '../../dto/createPokemonDTO'

describe('Create pokemon', () => {
  let pokemonGateway: InMemoryPokemontGateway
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
  let uuidGenerator: FakeUUIDGenerator
  beforeEach(() => {
    setActivePinia(createPinia())
    uuidGenerator = new FakeUUIDGenerator()
    pokemonGateway = new InMemoryPokemontGateway(uuidGenerator)
  })
  describe('There is no previous pokemon', () => {
    describe('Create a pokemon', () => {
      beforeEach(async () => {
        await whenCreatePokemon(terre.id, {
            name: terre.name,
            height: terre.height,
            health: terre.health,
            catchRate: terre.catchRate,
        })
      })
      it('should save the pokemon in the store', () => {
        expectStoreToContains(terre)
      })
      it('should save the pokemon in the gateway', async () => {
        await expectGatewayToContains(terre)
      })
    })
    describe('Create a pokemon', () => {
      beforeEach(async () => {
        await whenCreatePokemon(electrique.id, {
            name: electrique.name,
            height: electrique.height,
            health: electrique.health,
            catchRate: electrique.catchRate,
        })
      })
      it('should save the pokemon in the store', () => {
        expectStoreToContains(electrique)
      })
      it('should save the pokemon in the gateway', async () => {
        await expectGatewayToContains(electrique)
      })
    })
  })

  describe('There is previous product', () => {
    beforeEach(async () => {
      givenSomePokemonExists(terre)
      await whenCreatePokemon(electrique.id, {
        name: electrique.name,
        height: electrique.height,
        health: electrique.health,
        catchRate: electrique.catchRate,
      })
    })
    it('should save the pokemon in the store', () => {
      expectStoreToContains(terre, electrique)
    })
    it('should save the pokemon in the gateway', async () => {
      await expectGatewayToContains(terre, electrique)
    })
  })

  const givenSomePokemonExists = (...pokemon: Array<Pokemon>) => {
    pokemonGateway.feedWith(...pokemon)
    const pokemonStore = usePokemonStore()
    pokemonStore.items = pokemon
  }

  const whenCreatePokemon = async (id: string, createPokemonDTO: CreatePokemonDTO) => {
    uuidGenerator.setNextUuid(id)
    await createPokemon(createPokemonDTO, pokemonGateway)
  }

  const expectStoreToContains = (...pokemon: Array<Pokemon>) => {
    const pokemonStore = usePokemonStore()
    expect(pokemonStore.items).toEqual(pokemon)
  }
  const expectGatewayToContains = async (...pokemon: Array<Pokemon>) => {
    expect(await pokemonGateway.listAll()).toEqual(pokemon)
  }
})

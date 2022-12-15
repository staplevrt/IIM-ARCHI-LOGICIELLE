import { Pokemon } from '../../entities/pokemon'
import { usePokemonStore } from '../../../store/pokemonStore'
import { createPinia, setActivePinia } from 'pinia'
import { createPokemon } from './createPokemon'
import { InMemoryPokemontGateway} from '../../../adapters/secondary/InMemoryPokemonGateway'
import { FakeUUIDGenerator } from '../../../adapters/secondary/fakeUUIDGenerator'
import { CreatePokemonDTO } from '../../dto/createPokemonDTO'

describe('Create product', () => {
  let pokemonGateway: InMemoryPokemontGateway
  const terre: Pokemon = {
    id: '2',
    name: 'Bulbizar',
    height: 3000,
    health: 5,
    catchRate: 7,
    
  }
  const electrique: Pokemon = {
    id: '3',
    name: 'pikachu',
    height: 3000,
    health: 5,
    catchRate: 7,
  }
  let uuidGenerator: FakeUUIDGenerator
  beforeEach(() => {
    setActivePinia(createPinia())
    uuidGenerator = new FakeUUIDGenerator()
    pokemonGateway = new InMemoryPokemontGateway(uuidGenerator)
  })
  describe('There is no previous product', () => {
    describe('Create an pantalon', () => {
      beforeEach(async () => {
        await whenCreateProduct(terre.id, {
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
    describe('Create chaussettes', () => {
      beforeEach(async () => {
        await whenCreateProduct(electrique.id, {
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
      givenSomeProductsExists(terre)
      await whenCreateProduct(electrique.id, {
        name: electrique.name,
        height: electrique.height,
        health: electrique.health,
        catchRate: electrique.catchRate,
      })
    })
    it('should save the product in the store', () => {
      expectStoreToContains(terre, electrique)
    })
    it('should save the product in the gateway', async () => {
      await expectGatewayToContains(terre, electrique)
    })
  })

  const givenSomeProductsExists = (...pokemon: Array<Pokemon>) => {
    pokemonGateway.feedWith(...pokemon)
    const pokemonStore = usePokemonStore()
    pokemonStore.items = pokemon
  }

  const whenCreateProduct = async (id: string, createPokemonDTO: CreatePokemonDTO) => {
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

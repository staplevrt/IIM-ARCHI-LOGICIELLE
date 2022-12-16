import { listAllPokemonVM } from './listAllPokemonVM'
import { usePokemonStore } from '../../../store/pokemonStore'
import { Pokemon } from '../../../core/entities/pokemon'
import { createPinia, setActivePinia } from 'pinia'

describe('List all pokemon VM', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should return nothing when there is no pokemon', () => {
    const expectedVM: any = {
      items: []
    }
    expect(listAllPokemonVM()).toEqual(expectedVM)
  })
  it('should return nothing when there is no pokemon', () => {
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
    const pokemonStore = usePokemonStore()
    pokemonStore.items = [fire, air]
    const expectedVM: any = {
      items: [
        {
            id: '4',
            name: 'delcatty',
            height: 307,
            health: 104,
            catchRate: 7,
        },
        {
            id: '4',
            name: 'togekiss',
            height: 411,
            health: 102,
            catchRate: 7,
        }
      ]
    }
    expect(listAllPokemonVM()).toEqual(expectedVM)
  })
})

import { usePokemonStore } from '../../../store/pokemonStore'

export interface ListAllPokemonItemVM {
  id: string
  name: string
  height: number
  health: number
  catchRate: number
}

export interface ListAllPokemonVM {
  items: Array<ListAllPokemonItemVM>
}

export const listAllPokemonVM = (): ListAllPokemonVM => {
  const pokemonStore = usePokemonStore()
  return {
    items: pokemonStore.items.map(pokemon => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        health: pokemon.health,
        catchRate: pokemon.catchRate
      }
    })
  }
}
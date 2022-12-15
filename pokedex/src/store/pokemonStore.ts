import { defineStore } from 'pinia'
import { Pokemon } from '../core/entities/pokemon'

export const usePokemonStore = defineStore('PokemonStore', {
  state: () => {
    return {
      items: [] as Array<Pokemon>
    }
  },
  actions: {
    list(pokemon: Array<Pokemon>) {
      this.items = pokemon
    },
    add(pokemon: Pokemon) {
      this.items.push(pokemon)
    }
  }
})

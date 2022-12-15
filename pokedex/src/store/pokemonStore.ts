import { defineStore } from 'pinia'
import { Pokemon, Product } from '../core/entities/pokemon'

export const useProductStore = defineStore('PokemonStore', {
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

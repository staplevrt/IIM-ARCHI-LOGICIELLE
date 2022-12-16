import { usePokemonStore } from '../../../store/pokemonStore'
import { PokemonGateway } from '../../gateways/pokemonGateway'

export const listAllPokemon = async (pokemonGateway: PokemonGateway) => {
  const pokemon = await pokemonGateway.listAll()
  const pokemonStore = usePokemonStore()
  pokemonStore.list(pokemon)
}
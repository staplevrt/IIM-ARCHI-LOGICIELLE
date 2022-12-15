import { usePokemonStore } from '../../../store/pokemonStore'
import { PokemonGateway } from '../../gateways/pokemonGateway'
import { CreatePokemonDTO } from '../../dto/createPokemonDTO'

export const createPokemon = async (createPokemonDTO: CreatePokemonDTO, pokemonGateway: PokemonGateway) => {
  const pokemonStore = usePokemonStore()
  const created = await pokemonGateway.create(createPokemonDTO)
  pokemonStore.add(created)
}

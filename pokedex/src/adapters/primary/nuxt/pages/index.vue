<template>
  <h1>Pokemon Archives</h1>
  <div v-for="product in allPokemonVM.items" :key="product.id">
    <div>{{product.name}}: {{product.height}}</div>
  </div>
  <ul>
    <li>Pikachu</li>
    <li>Mew</li>
    <li>Onix</li>
    <li>Togekiss</li>
    <li>Delcatty</li>
  </ul>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from '../../../../../.nuxt/imports'
import { listAllPokemon } from '../../../../core/usecases/list-all-pokedex/listAllPokemon'
import { listAllPokemonVM } from '../../../view-model/list-all-pokemon-vm/listAllPokemonVM'
import pokemonGateway from '../../../../../dependencies/pokemonGateway'
import { createPokemonVM } from '../../../view-model/create-pokemon-vm/createPokemonVM'

onMounted(() => {
  listAllPokemon(pokemonGateway)
})

const handleNameChanged = (e: any) => {
  createVM.value.name = e.target.value
}

const createVM = ref(createPokemonVM())

const allPokemonVM = computed(() => {
  return listAllPokemonVM()
})

</script>

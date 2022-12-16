import { createPokemonVM } from './createPokemonVM'

describe('Create pokemon VM', () => {
  let vm
  beforeEach(() => {
    vm = createPokemonVM()
  })
  
  describe('Initially', () => {
    it('should initialize the vm', () => {
      expect(vm.name).toEqual('')
      expect(vm.height).toEqual(0)
      expect(vm.health).toEqual(0)
      expect(vm.catchRate).toEqual(0)
    })
  })
  describe('Update name', () => {
    it('should update name', () => {
      vm.name = 'pikachu'
      expect(vm.name).toEqual('pikachu')
      expect(vm.height).toEqual(0)
      expect(vm.health).toEqual(0)
      expect(vm.catchRate).toEqual(0)
    })
  })
})

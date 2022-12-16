export class CreatePokemonVM {
    private _name: string = ''
    private _height: number = 0
    private _health: number = 0
    private _catchRate: number = 0
  
    get name(): string {
      return this._name
    }
    set name(name: string) {
      this._name = name
    }

    get height(): number {
      return this._height
    }
    get health(): number {
        return this._health
    }
    get catchRate(): number {
        return this._catchRate
    }
  }
  
  export const createPokemonVM = () => {
    return new CreatePokemonVM()
  }
  
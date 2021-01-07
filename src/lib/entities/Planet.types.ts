export interface IPlanetData {
  readonly id?: string
  readonly climate: string
  readonly name: string
  readonly population: string
  // readonly residents: string[]
  readonly url: string
}

export interface IPlanet extends IPlanetData {}

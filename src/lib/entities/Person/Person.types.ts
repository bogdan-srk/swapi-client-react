export interface IPersonData {
  readonly name: string;
  readonly height: string;
  readonly mass: string;
  readonly gender: string;
  readonly url: string;
}

export interface IPerson extends IPersonData {
  readonly id: string
}

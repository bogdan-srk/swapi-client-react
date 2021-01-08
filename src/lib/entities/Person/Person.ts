import { IPerson, IPersonData } from './Person.types';

export class Person implements IPerson {
  readonly gender: string;
  readonly height: string;
  readonly id: string;
  readonly mass: string;
  readonly name: string;
  readonly url: string;

  constructor(data: IPersonData) {
    this.id = Person.getIdFromData(data);
    this.gender = data.gender;
    this.height = data.height;
    this.mass = data.mass;
    this.name = data.name;
    this.url = data.url;
  }

  public static getIdFromData(data: IPersonData): string {
    return data.url.split('/').filter(Boolean).pop() || ''
  }
}

import { IPersonData } from '../../../lib/entities/Person/Person.types';

class PeopleApiService {
  readonly url: string;

  constructor() {
    this.url = 'https://swapi.dev/api/people/';
  }

  fetchPerson(id: string): Promise<IPersonData> {
    const url = new URL(`${this.url}${id}/`);

    return fetch(url.toString())
      .then((res) => res.json());
  }

  fetchPeople(ids: string[]): Promise<IPersonData[]> {
    const queries = ids.map((id) => this.fetchPerson(id));

    return Promise.all(queries);
  }
}

export default new PeopleApiService();

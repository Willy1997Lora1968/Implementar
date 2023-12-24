export default class RickAndMortyService {
  static async getAllCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data;
  }
}

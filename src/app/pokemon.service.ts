import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonAPI = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {  }

  getPokemonList() {
    return this.http.get(this.pokemonAPI);
  }
  
  getPokemon
}

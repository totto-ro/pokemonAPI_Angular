import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private _htpp: HttpClient ) { }

  getPokemones(){
    return this._htpp.get('https://pokeapi.co/api/v2/pokemon/38/');
  }

  getNumOfFireFlash(){
    return this._htpp.get('https://pokeapi.co/api/v2/ability/18');
  }

  getNumOfDrought(){
    return this._htpp.get('https://pokeapi.co/api/v2/ability/70');
  }

}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  pokeNum: any;
  pokeNum2: any;
  constructor( private _pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.getPokemones();
    this.getNumOfPokemonsWithAbility();
  }

  getPokemones():void{
    console.log("Fetching task list")
    let observable = this._pokemonService.getPokemones();

    observable.subscribe( (data:any) =>{
      this.pokemon = data;
      console.log( "Display all info of Ninetails: ",this.pokemon)
      console.log(`My favorite pokemon is ${this.pokemon.name}.` )
      console.log(`Ninetails type is ${this.pokemon.types[0].type.name} and his/her abilities are ${this.pokemon.abilities[0].ability.name} and ${this.pokemon.abilities[1].ability.name}.` )
    });
  }

  getNumOfPokemonsWithAbility():void{
    let observable = this._pokemonService.getNumOfFireFlash();

    observable.subscribe( (data:any) =>{
      this.pokeNum = data;
      console.log( "Display results for flash-fire ability: ",this.pokeNum)
      console.log(`The number of pokemons that share the flash-fire ability are: ${this.pokeNum.pokemon.length}.`)
    });

    let observable2 = this._pokemonService.getNumOfDrought();

    observable2.subscribe( (data:any) =>{
      this.pokeNum2 = data;
      console.log( "Display results for drought ability: ",this.pokeNum2)
      console.log(`The number of pokemons that share the drought ability are: ${this.pokeNum2.pokemon.length}.`)
    });
  }

}

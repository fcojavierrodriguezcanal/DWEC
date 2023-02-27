import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemons.service';
import { Pokemon } from 'src/app/models/Pokemon';




@Component({
  selector: 'app-elinicio',
  templateUrl: './elinicio.component.html',
  styleUrls: ['./elinicio.component.css'],
  providers: [PokemonService]
  
})

export class ElinicioComponent implements OnInit{

  //@Input() public pokemons: Array<any>;
  @Input() public name: String;

  @Input() public url: String;

items: any;
  constructor(private _pokemonService: PokemonService) {
    this.name = "";
    this.url = "";
  }
changePokemons(event:Event) {
  this._pokemonService.type=(event.target as HTMLInputElement).value;
  console.log(this._pokemonService.type)
  this.ngOnInit();
}
//CREAR METODO QUE CAMBIA EL TYPE DE LA CLASE POKEMONS.SERVICE.TS
ngOnInit() :void{
  this._pokemonService.getPokemons().subscribe(
    response => {
      
      //console.log("la response es"+JSON.stringify(response));
      
     // console.log(response.pokemon);
      
      for(var index in response.pokemon) {
        var item=response.pokemon[index];
         this.items=response.pokemon;

          console.log(item);
          
          
          
      }
    },
    error => {
      console.log(error);
    }
  )
}


//LLAMA AL METODO GETPOKEMONS DE LA CLASE POKEMONS.SERVICE.TS

}
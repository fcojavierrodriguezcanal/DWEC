import { Component } from '@angular/core';
import { cambiartype } from 'src/main';

function changepokemons(event:Event){
  cambiartype((event.target as HTMLInputElement).value);
  
}
@Component({
  selector: 'app-elinicio',
  templateUrl: './elinicio.component.html',
  styleUrls: ['./elinicio.component.css']
})

export class ElinicioComponent {
//CREAR METODO QUE CAMBIA EL TYPE DE LA CLASE POKEMONS.SERVICE.TS

//LLAMA AL METODO GETPOKEMONS DE LA CLASE POKEMONS.SERVICE.TS
}

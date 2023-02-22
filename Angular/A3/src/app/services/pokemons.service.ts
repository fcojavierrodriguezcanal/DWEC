import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponseBase } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Global } from './Global';

@Injectable()
export class PokemonService {
  public url: string;
  
  constructor (private _http: HttpClient){
    this.url =Global.url;
  }
getPokemons():Observable<any>{
  return this._http.get(this.url+'/')
}
}

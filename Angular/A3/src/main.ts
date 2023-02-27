import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PokemonService } from './app/services/pokemons.service';
import { AppModule } from './app/app.module';
import { ConfigService } from './app/services/Config.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


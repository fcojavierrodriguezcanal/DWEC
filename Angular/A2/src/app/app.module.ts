import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecordarcontraComponent } from './recordarcontra/recordarcontra.component';
import { ElinicioComponent } from './elinicio/elinicio.component';
import { VerificarcuentaComponent } from './verificarcuenta/verificarcuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecordarcontraComponent,
    ElinicioComponent,
    VerificarcuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

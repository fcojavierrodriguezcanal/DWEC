import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecordarcontraComponent } from './recordarcontra/recordarcontra.component';
import { ElinicioComponent } from './elinicio/elinicio.component';
import { VerificarcuentaComponent } from './verificarcuenta/verificarcuenta.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RecordarcontraPageComponent } from './recordarcontra-page/recordarcontra-page.component';
import { VerificarcuentaPageComponent } from './verificarcuenta-page/verificarcuenta-page.component';
import { ElinicioPageComponent } from './elinicio-page/elinicio-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecordarcontraComponent,
    ElinicioComponent,
    VerificarcuentaComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RecordarcontraPageComponent,
    VerificarcuentaPageComponent,
    ElinicioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

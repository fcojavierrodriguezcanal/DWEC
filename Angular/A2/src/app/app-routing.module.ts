import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RecordarcontraPageComponent } from './recordarcontra-page/recordarcontra-page.component';
import { ElinicioComponent } from './elinicio/elinicio.component';
import { VerificarcuentaPageComponent } from './verificarcuenta-page/verificarcuenta-page.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/loginPage', pathMatch: 'full' },
  { path: 'loginPage', component: LoginPageComponent},
      { path: 'inicioPage', component: ElinicioComponent},
      { path: 'recordarcontraPage', component: RecordarcontraPageComponent},
      { path: 'registerPage', component: RegisterPageComponent},
      {path:'verifyPage', component: VerificarcuentaPageComponent }
    ];


@NgModule({

  imports: [RouterModule.forRoot(routes), CommonModule] ,
  exports: [RouterModule]

})
export class AppRoutingModule {

}


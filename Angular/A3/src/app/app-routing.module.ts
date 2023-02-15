import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ElinicioPageComponent } from './pages/elinicio-page/elinicio-page.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/loginPage', pathMatch: 'full' },
  { path: 'loginPage', component: LoginPageComponent},
  { path: 'registerPage', component: RegisterPageComponent},
  { path: 'inicioPage', component: ElinicioPageComponent}

    ];


@NgModule({

  imports: [RouterModule.forRoot(routes), CommonModule] ,
  exports: [RouterModule]

})
export class AppRoutingModule {

}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ElinicioPageComponent } from './pages/elinicio-page/elinicio-page.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/loginPage', pathMatch: 'full' },
  { path: 'loginPage', component: LoginPageComponent},
  { path: 'inicioPage', component: ElinicioPageComponent}

    ];


@NgModule({

  imports: [RouterModule.forRoot(routes), CommonModule] ,
  exports: [RouterModule]

})
export class AppRoutingModule {

}


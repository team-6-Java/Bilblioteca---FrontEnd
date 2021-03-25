import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from './libro/libro.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'login/forgot', component:ForgotComponent},
  {path:'login/register', component:RegisterComponent},
  {path:'libro', component:LibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

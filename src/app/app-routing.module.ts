import { NgModule } from '@angular/core';
import {  Routes, RouterModule, } from '@angular/router';
import { AcercaDeComponent } from './biblioteca/acerca-de/acerca-de.component';
import { AyudaComponent } from './biblioteca/ayuda/ayuda.component';
import { BusquedaLibrosComponent } from './biblioteca/busqueda-libros/busqueda-libros.component';
import { ChatComponent } from './biblioteca/chat/chat.component';

import { LibroComponent } from './biblioteca/libro/libro.component';
import { ForgotComponent } from './biblioteca/login/forgot/forgot.component';
import { LoginComponent } from './biblioteca/login/login/login.component';
import { RegisterComponent } from './biblioteca/login/register/register.component';
import { MibibliotecaComponent } from './biblioteca/mibiblioteca/mibiblioteca.component';
import { ModificarPerfilComponent } from './biblioteca/modificar-perfil/modificar-perfil.component';
import { NavComponent } from './biblioteca/nav/nav.component';

import { PerfilComponent } from './biblioteca/perfil/perfil.component';
import { RegistrarLibroComponent } from './biblioteca/registrar-libro/registrar-libro.component';


const routes: Routes = [

  {path: '', pathMatch: 'full',redirectTo: 'login'},
  {path: 'perfil', component: PerfilComponent},
  {path: 'mibiblioteca', component: MibibliotecaComponent},
  {path: 'busquedaLibros', component: BusquedaLibrosComponent},
  {path: 'registrarlibro', component: RegistrarLibroComponent},
  {path: 'modificarperfil', component: ModificarPerfilComponent},
  {path: 'ayuda', component: AyudaComponent},
  {path: 'acercade', component: AcercaDeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'libro', component: LibroComponent},
  {path: 'nav', component: NavComponent},



];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

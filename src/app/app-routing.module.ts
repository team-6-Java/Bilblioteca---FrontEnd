import { NgModule } from '@angular/core';
import {  Routes, RouterModule, } from '@angular/router';
import { AcercaDeComponent } from './biblioteca/acerca-de/acerca-de.component';

import { AutorComponent } from './biblioteca/autor/autor.component';
import { AyudaComponent } from './biblioteca/ayuda/ayuda.component';
import { BusquedaAutorComponent } from './biblioteca/busqueda-autor/busqueda-autor.component';
import { BusquedaIsbnComponent } from './biblioteca/busqueda-isbn/busqueda-isbn.component';
import { BusquedaComponent } from './biblioteca/busqueda-libros/list-busqueda-libros/list-busqueda-libros.component';
import { BusquedaBusquedanombreautorComponent } from './biblioteca/busquedanombreautor/busquedanombreautor.component';
import { ChatComponent } from './biblioteca/chat/chat.component';
import { EditorialComponent } from './biblioteca/editorial/editorial.component';

import { ForgotComponent } from './biblioteca/login/forgot/forgot.component';
import { LoginComponent } from './biblioteca/login/login/login.component';
import { RegisterComponent } from './biblioteca/login/register/register.component';

import { MibibliotecaComponent } from './biblioteca/mibiblioteca/crud/list-mibiblioteca/list-mibiblioteca.component';
import { NavComponent } from './biblioteca/nav/nav.component';


import { PerfilComponent } from './biblioteca/perfil/perfil.component';
import { RegistrarLibroComponent } from './biblioteca/registrar-libro/registrar-libro.component';



const routes: Routes = [

  {path: '', pathMatch: 'full',redirectTo: 'login'},

  {path: 'perfil', component: PerfilComponent},
  {path: 'mibiblioteca', component: MibibliotecaComponent},
  {path: 'busquedalibros', component: BusquedaComponent},
  {path: 'registrarlibro', component: RegistrarLibroComponent},

  {path: 'ayuda', component: AyudaComponent},
  {path: 'acercade', component: AcercaDeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'nav', component: NavComponent},

  {path: 'editorial', component:EditorialComponent },
  {path: 'autor', component:AutorComponent },

  {path: 'modalvermas/:id', component: MibibliotecaComponent},
  {path: 'busquedalibros', component: BusquedaComponent},
  {path: 'busquedaautor', component: BusquedaAutorComponent},
  {path: 'busquedaisbn', component: BusquedaIsbnComponent},
  {path: 'busquedanombreautor', component: BusquedaBusquedanombreautorComponent},



];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

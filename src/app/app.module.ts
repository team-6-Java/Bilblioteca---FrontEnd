import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './biblioteca/perfil/perfil.component';
import { MibibliotecaComponent } from './biblioteca/mibiblioteca/crud/list-mibiblioteca/list-mibiblioteca.component';
import { BusquedaComponent } from './biblioteca/busqueda-libros/list-busqueda-libros/list-busqueda-libros.component';
import { RegistrarLibroComponent } from './biblioteca/registrar-libro/registrar-libro.component';
import { ModificarPerfilComponent } from './biblioteca/modificar-perfil/modificar-perfil.component';
import { AyudaComponent } from './biblioteca/ayuda/ayuda.component';
import { AcercaDeComponent } from './biblioteca/acerca-de/acerca-de.component';
import { ChatComponent } from './biblioteca/chat/chat.component';
import { NavComponent } from './biblioteca/nav/nav.component';
import { LoginComponent } from './biblioteca/login/login/login.component';
import { RegisterComponent } from './biblioteca/login/register/register.component';

import { authInterceptorProviders } from './biblioteca/login/_helpers/auth.interceptor';
import { EditorialComponent } from './biblioteca/editorial/editorial.component';
import { AutorComponent } from './biblioteca/autor/autor.component';
import { BusquedaAutorComponent } from './biblioteca/busqueda-autor/busqueda-autor.component';
import { BusquedaIsbnComponent } from './biblioteca/busqueda-isbn/busqueda-isbn.component';
import { BusquedaBusquedanombreautorComponent} from './biblioteca/busquedanombreautor/busquedanombreautor.component'


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    MibibliotecaComponent,
    BusquedaComponent,
    RegistrarLibroComponent,
    ModificarPerfilComponent,
    AyudaComponent,
    AcercaDeComponent,
    ChatComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,

    EditorialComponent,

    AutorComponent,

    BusquedaAutorComponent,
    BusquedaIsbnComponent,
    BusquedaBusquedanombreautorComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      //necesario para conectar con API
    HttpClientModule  //necesario para conectar con API
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

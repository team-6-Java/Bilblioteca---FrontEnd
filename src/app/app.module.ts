import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './biblioteca/perfil/perfil.component';
import { MibibliotecaComponent } from './biblioteca/mibiblioteca/mibiblioteca.component';
import { BusquedaLibrosComponent } from './biblioteca/busqueda-libros/busqueda-libros.component';
import { RegistrarLibroComponent } from './biblioteca/registrar-libro/registrar-libro.component';
import { ModificarPerfilComponent } from './biblioteca/modificar-perfil/modificar-perfil.component';
import { AyudaComponent } from './biblioteca/ayuda/ayuda.component';
import { AcercaDeComponent } from './biblioteca/acerca-de/acerca-de.component';
import { ChatComponent } from './biblioteca/chat/chat.component';
import { NavComponent } from './biblioteca/nav/nav.component';
import { LoginComponent } from './biblioteca/login/login/login.component';
import { RegisterComponent } from './biblioteca/login/register/register.component';

import { authInterceptorProviders } from './biblioteca/login/_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    MibibliotecaComponent,
    BusquedaLibrosComponent,
    RegistrarLibroComponent,
    ModificarPerfilComponent,
    AyudaComponent,
    AcercaDeComponent,
    ChatComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

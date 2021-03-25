import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { RegisterComponent } from './login/register/register.component';
import { LibroComponent } from './libro/libro.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    LibroComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Perfil } from '../../perfil/model/perfil';
import {PerfilService } from '../../perfil/service/perfil.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  errorMessage = '';
  isSignUpFailed = false;


  perfil :Perfil={
    username:'',
    nombre:'',
    apellido: '',
    email: '',
    contraseña: '',
    descripcion: '',
    imagen: '',
  }
  constructor(private authService: AuthService, private crudPerfil:PerfilService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.perfil={
          username:username,
          contraseña:"password",
          email:email
        }
        //this.crearUsuario(this.perfil);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

/*
  crearUsuario(perfil:Perfil){
      this.crudPerfil.createPerfil(perfil).subscribe(
      data => {
        console.log(data);



      },
      err => {
       console.log(err);

      }
      )

  } */
}

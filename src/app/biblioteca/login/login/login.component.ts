import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Perfil } from '../../perfil/model/perfil';
import {PerfilService } from '../../perfil/service/perfil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  perfil :Perfil={
    username:'',
    nombre:'',
    apellido: '',
    email: '',
    contraseña: '',
    descripcion: '',
    imagen: '',
  }
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private crudPerfil:PerfilService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        window.location.href="./busquedalibros";
        this.perfil= {
          username:this.tokenStorage.getUser().username,
          nombre:'',
          apellido: '',
          contraseña: '',
          descripcion: '',
          imagen: '',
          email:this.tokenStorage.getUser().email
        }
        this.crearUsuario(this.perfil);
        console.log(data);
    },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  crearUsuario(perfil:Perfil){
    this.crudPerfil.createPerfil(perfil).subscribe(
    data => {
      console.log(data);



    },
    err => {
     console.log(err);

    }
    )

}
  reloadPage(): void {
    window.location.reload();
  }
}

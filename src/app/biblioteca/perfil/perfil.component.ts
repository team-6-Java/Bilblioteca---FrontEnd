import { Component, OnInit } from '@angular/core';
import { Perfil } from '../perfil/model/perfil';
import { PerfilService } from '../perfil/service/perfil.service';
import {TokenStorageService} from '../login/_services/token-storage.service'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil :Perfil={
    username:'',
    nombre:'',
    apellido: '',
    email: '',
    contraseña: 'password',
    descripcion: '',
    imagen: '',
  }

  isUpdate = false;
  isSuccessful = false;
  errorMessage = '';

  constructor(private token: TokenStorageService, private crudPerfil:PerfilService) { }

  ngOnInit() {

      this.perfil.username=this.token.getUser().username;
      this.perfil.email=this.token.getUser().email;
      this.getPerfil();


  }

  /* actualizarUsuario():void{
    console.log(this.perfil)
    this.isSuccessful = true;
    this.isUpdate= true; delete this.perfil.username;
    this.crudPerfil.updatePerfil( this.perfil)
    .subscribe(
      data => {
        console.log(data);
        this.isUpdate = false;
        this.isSuccessful = true;
      },
      error => console.log(error));
      console.log(this.perfil);
      this.errorMessage = err.error.message;
       this.isUpdate = true;
  }*/

  updatePerfil() {
    console.log(this.perfil)
    this.isSuccessful = true;
    this.isUpdate= true; //delete this.perfil.username;
    this.crudPerfil.updatePerfil(this.perfil.username!, this.perfil)
      .subscribe(data => {
        console.log(data);
        this.isUpdate = false;
        this.isSuccessful = true;

        console.log(data)
      }, error => console.log(error));
  }

  getPerfil() {
    console.log(this.perfil)
    //this.isSuccessful = true;
    //this.isUpdate= true; //delete this.perfil.username;
    this.crudPerfil.getPerfil(this.perfil.username!)
      .subscribe(data => {
        console.log(data);
        this.perfil.nombre=data.nombre;
        this.perfil.apellido=data.apellido;
        this.perfil.descripcion=data.descripcion;

        //this.isUpdate = false;
       // this.isSuccessful = true;

        console.log(data)
      }, error => console.log(error));
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from './model/Libro';
import { RegistrarLibroService } from './service/registrar-libro.service';
import { TokenStorageService } from '../login/_services/token-storage.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: 'registrar-libro.component.html',
  styleUrls: ['registrar-libro.component.css'],
})
export class RegistrarLibroComponent implements OnInit {
  //libro: Libro = new Libro();
  //submitted = false;

  autores: any;
  editoriales: any;
  private idAutor = 0;
  private idEditorial = 0;
  libro: any = {
    titulo: '',
    isbn: '',
    tematica: '',
    estado: '',
    imagen: '',
    paginas: '',
    descripcion: '',
    veces_prestado: 0,
    usuario:{
      username:'',
      nombre:'',
      apellido:'',
      email:'',
      contraseña:'',
      descripcion:'',
      imagen:''
    },
    editorial: {
      id:'',
      nombre:''
    },
    autor: {
      id:'',
      nombre:'',
      apellido:''
    },
  };

  isUpdate = false;
  isSuccessful = false;
  errorMessage = '';

  constructor(
    private registrarLibroService: RegistrarLibroService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.libro.usuario.username = this.tokenStorage.getUser().username;
    this.libro.usuario.nombre = this.tokenStorage.getUser().nombre;
    this.libro.usuario.apellido = this.tokenStorage.getUser().apellido;
    this.libro.usuario.email = this.tokenStorage.getUser().email;
    this.libro.usuario.contraseña = '';
    this.libro.usuario.descripcion = this.tokenStorage.getUser().descripcion;
    this.libro.usuario.imagen = '';
    this.autores = this.registrarLibroService.getAutorList();
    this.editoriales = this.registrarLibroService.getEditorialList();

  }

  createLibro(libro: Libro) {
    this.registrarLibroService.createLibro(libro).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  save() {
    this.registrarLibroService.createLibro(this.libro).subscribe(
      (data) => {
        console.log(data);
        this.libro = new Libro();
        console.log(this.libro);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    console.log(this.libro);
    this.libro.autor.id = this.idAutor;
    this.libro.editorial.id = this.idEditorial;
    this.libro.paginas = parseInt(this.libro.paginas);
    this.libro.veces_prestado = parseInt(this.libro.veces_prestado);
    this.save();
  }
  gotoList() {
    this.router.navigate(['/mibiblioteca']);
  }

  ponerAutor(autor: number, nombre: string, apellido: string) {
    console.log(autor,nombre,apellido)
    if (apellido == null) {
      (<HTMLInputElement>document.getElementById("autor")).value = nombre;
    } else {
      (<HTMLInputElement>document.getElementById("autor")).value = nombre + " " + apellido;
    }
    this.idAutor = autor;
    this.libro.autor.nombre=nombre;
    this.libro.autor.apellido=apellido;
  }

  ponerEditorial(editorial: number, nombre: string) {
    console.log(editorial,nombre);
    (<HTMLInputElement>document.getElementById("editorial")).value = nombre;
    this.idEditorial = editorial;
    this.libro.editorial.nombre=nombre;
  }
}

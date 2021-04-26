import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiBibliotecaService } from '../../service/mibiblioteca.service';
import { Libro } from '../../model/Libro';
import { TokenStorageService } from '../../../login/_services/token-storage.service';
import { RegistrarLibroService } from '../../../registrar-libro/service/registrar-libro.service';
@Component({
  selector: 'app-mibiblioteca',
  templateUrl: './list-mibiblioteca.component.html',
  styleUrls: ['./list-mibiblioteca.component.css'],
})
export class MibibliotecaComponent implements OnInit {
  libros: any;
  editoriales: any;
  autores:any;
  num: number = 0;
  idAutor:number=0;
  idEditorial:number=0;
  user: string = '';
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
  constructor(
    private mibibliotecaService: MiBibliotecaService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private registrarLibroService: RegistrarLibroService
  ) {}

  ngOnInit() {
    this.reloadData();
    this.user = this.tokenStorage.getUser().username;
    this.mostrarEste();
  }

  reloadData() {
    this.libro.usuario.username = this.tokenStorage.getUser().username;
    this.libro.usuario.nombre = this.tokenStorage.getUser().nombre;
    this.libro.usuario.apellido = this.tokenStorage.getUser().apellido;
    this.libro.usuario.email = this.tokenStorage.getUser().email;
    this.libro.usuario.contraseña = '';
    this.libro.usuario.descripcion = this.tokenStorage.getUser().descripcion;
    this.libro.usuario.imagen = '';
    this.libros = this.mibibliotecaService.getLibroList();
    this.autores = this.registrarLibroService.getAutorList();
    this.editoriales = this.registrarLibroService.getEditorialList();
  }

  metodo(libro: Libro) {
    this.libro = libro;
  }

  deleteLibro(id: number) {
    if (confirm('¿Seguro que quieres borrar el libro? ')) {
      this.mibibliotecaService.deleteLibro(id).subscribe(
        (data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error)
      );
    }
  }

  libroDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateLibro(id: number) {
    console.log(this.libro, "sdfgkjshgadf");
    this.mibibliotecaService.updateLibro(id, this.libro).subscribe(
      (data) => {
        console.log(data, "victor");
      },
      (error) => console.log(error)
    );
  }
  ponerAutor(autor: number, nombre: string, apellido: string) {
    console.log(autor,nombre,apellido)
    if (apellido == null) {
      (<HTMLInputElement>document.getElementById("autor")).value = nombre;
    } else {
      (<HTMLInputElement>document.getElementById("autor")).value = nombre + " " + apellido;
    }
    this.idAutor = autor;
    this.libro.autor.id=autor;
    this.libro.autor.nombre=nombre;
    this.libro.autor.apellido=apellido;
  }

  ponerEditorial(editorial: number, nombre: string) {
    console.log(editorial,nombre);
    this.idEditorial = editorial;
    this.libro.editorial.nombre=nombre;
    this.libro.editorial.id=editorial;
    (<HTMLInputElement>document.getElementById("editorial")).value = this.libro.editorial.nombre;

  }

  mostrarOtro(){
    document.getElementById("editar").classList.add('noVisible');

  }

  mostrarEste(){
    document.getElementById("editar").classList.add('visible');
  }
}

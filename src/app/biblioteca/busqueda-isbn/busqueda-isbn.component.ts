import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../busqueda-libros/model/Libro';
import {FiltrobusquedaService} from '../filtrobusqueda/filtrobusqueda.service'
import { BusquedaService } from '../busqueda-libros/service/busqueda-libros.service';



@Component({
  selector: 'app-busqueda-isbn',
  templateUrl: './busqueda-isbn.component.html',
  styleUrls: ['./busqueda-isbn.component.css']
})
export class BusquedaIsbnComponent implements OnInit {

  busqueda: string ='';
  libros: any;
  num: number = 0;
  libro: Libro={
    titulo:"",
    isbn:"",
    autor:{
      nombre:""
    },
    usuario:{
      username:""
    },
    editorial:{
      nombre:""
    }

  };


  constructor(private busquedaService: BusquedaService,
    private router: Router, public busquedafiltro: FiltrobusquedaService) {}

  ngOnInit() {
    this.busqueda=this.busquedafiltro.Busqueda;
    this.reloadData();
  }

  reloadData() {
    this.libros = this.busquedaService.getLibroList();
  }

  metodo(libro: Libro){
    this.libro = libro;
    console.log(libro)
  }

  pasarId(id: number){
    console.log(id)
    this.num = id;
  }

  deleteLibro(id: number) {
    this.busquedaService.deleteLibro(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  libroDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateLibro(id: number){
    this.router.navigate(['update', id]);
  }
}

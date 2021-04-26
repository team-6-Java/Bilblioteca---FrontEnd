import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../model/Libro';
import { BusquedaService } from '../service/busqueda-libros.service';
import {FiltrobusquedaService} from '../../filtrobusqueda/filtrobusqueda.service'



@Component({
  selector: 'app-busqueda',
  templateUrl: './list-busqueda-libros.component.html',
  styleUrls: ['./list-busqueda-libros.component.css']
})
export class BusquedaComponent implements OnInit {

  libros: any;
  private num = 0;
  libro: Libro={
    titulo:"",
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MiBibliotecaService } from '../../service/mibiblioteca.service';

@Component({
  selector: 'app-mibiblioteca',
  templateUrl: './list-mibiblioteca.component.html',
  styleUrls: ['./list-mibiblioteca.component.css']
})
export class MibibliotecaComponent implements OnInit {

  libros: any;

  constructor(private mibibliotecaService: MiBibliotecaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    //JSON.parse
    this.libros = this.mibibliotecaService.getLibroList();
    console.log(this.libros);
  }

  deleteLibro(id: number) {
    this.mibibliotecaService.deleteLibro(id)
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

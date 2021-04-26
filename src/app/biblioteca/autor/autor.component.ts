import { Component, OnInit } from '@angular/core';
import {  AutorService } from './service/autor.service'
import {Autor} from './model/autor'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//import { runInThisContext } from 'node:vm';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autor:Autor={
    id:0,
    nombre:'',
    //apellido:''
  };
  isUpdatedIn = false;
  isUpdatedFailed = false;

  constructor(private crudAutor : AutorService) { }

  ngOnInit(): void {
  }

  createdAutor() {
    delete this.autor.id;
    this.crudAutor.createAutor(this.autor)
    .subscribe(
      data => {
        console.log(data);
        this.isUpdatedIn = true;
      },
      error => console.log(error));
      console.log(this.autor);
      this.isUpdatedFailed = true;
  }
  autorDetails(id: number){
    this.crudAutor.getAutorList()
    .subscribe(
      data => {
        console.log(data);

      }
    )
  }

}

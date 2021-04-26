import { Component, OnInit } from '@angular/core';
import {  EditorialService } from './service/editorial.service'
import { Editorial} from './model/Editorial'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//import { runInThisContext } from 'node:vm';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {
  editorial:Editorial={
    id:0,
    nombre:''
  };
  isUpdatedIn = false;
  isUpdatedFailed = false;

  constructor(private crudEditorial : EditorialService) { }

  ngOnInit(): void {
  }

  createdEditorial() {
    delete this.editorial.id;
    this.crudEditorial.createEditorial(this.editorial)
    .subscribe(
      data => {
        console.log(data);
        this.isUpdatedIn = true;
      },
      error => console.log(error));
      console.log(this.editorial);
      this.isUpdatedFailed = true;
  }
  editorialDetails(id: number){
    this.crudEditorial.getEditorialList()
    .subscribe(
      data => {
        console.log(data);

      }
    )
  }

}

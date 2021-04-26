import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../login/_services/token-storage.service';
import {FiltrobusquedaService} from '../filtrobusqueda/filtrobusqueda.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  seleccionada:string = "";
  busqueda:string = "";
  constructor(private tokenStorageService: TokenStorageService, private filtrobusqueda: FiltrobusquedaService,
    private route: Router) { }

  ngOnInit(): void {

    this.busqueda=this.filtrobusqueda.Busqueda;
    this.seleccionada=this.filtrobusqueda.Filtro;

  }

  logout(): void {
    this.tokenStorageService.signOut();
     window.location.reload();
   }

   onKey(){
    console.log('hola gio')
    this.filtrobusqueda.Busqueda=this.busqueda;
  }

   filtrar(){
    this.filtrobusqueda.Busqueda=this.busqueda;
    this.filtrobusqueda.Filtro=this.seleccionada;
    if(this.seleccionada=="Autor"){
         this.route.navigate(['/busquedaautor'])
    }
    if(this.seleccionada=="Libro"){
      this.route.navigate(['/busquedalibros'])

   }
    if(this.seleccionada=="ISBN"){
      this.route.navigate(['/busquedaisbn'])

 }
    if(this.seleccionada=="Libro"){
  this.route.navigate(['/busquedanombreautor'])

}

  }


  onChange(){
    console.log('hola')
    if(this.seleccionada=="Autor"){
      this.route.navigate(['/busquedaautor'])
 }
 if(this.seleccionada=="Libro"){
   this.route.navigate(['/busquedalibros'])

}
 if(this.seleccionada=="ISBN"){
   this.route.navigate(['/busquedaisbn'])

}
 if(this.seleccionada=="Libro"){
this.route.navigate(['/busquedanombreautor'])

}


}
}

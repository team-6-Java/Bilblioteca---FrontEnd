import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../login/_services/token-storage.service';
import { Autor } from '../model/Autor'

@Injectable({
  providedIn: 'root'
})

export class AutorService {
  private baseUrl =
  'http://82.223.78.142:8080/biblioteca/biblioteca/content/autor';


  constructor(private http: HttpClient, private token: TokenStorageService ) { }



    createAutor(autor: Autor): Observable<Autor> {
    return this.http.post(this.baseUrl, autor);
      //return this.http.post(${this.baseUrl}, autor);
  }



  getAutorList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../login/_services/token-storage.service';
import { Editorial } from '../model/Editorial'

@Injectable({
  providedIn: 'root'
})

export class EditorialService {
  private baseUrl =
  'http://82.223.78.142:8080/biblioteca/biblioteca/content/editorial';


  constructor(private http: HttpClient, private token: TokenStorageService ) { }



    createEditorial(editorial: Editorial): Observable<Editorial> {
    return this.http.post(this.baseUrl, editorial);
      //return this.http.post(${this.baseUrl}, editorial);
  }



  getEditorialList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}



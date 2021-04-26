import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../../login/_services/token-storage.service';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BusquedaService {
  private baseUrl =
    'http://82.223.78.142:8080/biblioteca/biblioteca/content/libro';

  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getLibro(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }

  createLibro(libro: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, libro);
  }

  updateLibro(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLibroList(): Observable<any> {
    return this.http.get(this.baseUrl)
  }
}


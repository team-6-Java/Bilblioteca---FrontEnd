import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistrarLibroService {
  private baseUrl =
    'http://82.223.78.142:8080/biblioteca/biblioteca/content/libro';

    private baseUrlAutor =
    'http://82.223.78.142:8080/biblioteca/biblioteca/content/autor';

    private baseUrlEditorial =
    'http://82.223.78.142:8080/biblioteca/biblioteca/content/editorial';

  constructor(private http: HttpClient) { }

  getLibro(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }

  createLibro(libro: Object): Observable<Object> {
    console.log(libro)
    return this.http.post(this.baseUrl, libro);
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

  getAutorList(): Observable<any> {
    return this.http.get(this.baseUrlAutor)
  }

  getEditorialList(): Observable<any> {
    return this.http.get(this.baseUrlEditorial)
  }
}

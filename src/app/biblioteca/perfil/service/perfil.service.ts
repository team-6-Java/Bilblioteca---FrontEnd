import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../login/_services/token-storage.service';
import { Perfil } from '../model/perfil'
@Injectable({
  providedIn: 'root'
})

export class PerfilService {
  private baseUrl =
  'http://82.223.78.142:8080/biblioteca/biblioteca/content/usuario';

  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getPerfil(username: string): Observable<any> {
    return this.http.get(this.baseUrl + "/" + username);
  }

  createPerfil(usuario: Perfil): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario);
  }

  updatePerfil(username: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${username}`, value);
  }

  deletePerfil(username: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${username}`, { responseType: 'text' });
  }

  getPerfilList(): Observable<any> {
    return this.http.get(this.baseUrl)
  }
}



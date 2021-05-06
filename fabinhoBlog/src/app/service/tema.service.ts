import { Tema } from './../model/Tema';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  //metodo
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>("http://localhost:8080/tema", this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>("http://localhost:8080/tema", tema, this.token)
  }
}

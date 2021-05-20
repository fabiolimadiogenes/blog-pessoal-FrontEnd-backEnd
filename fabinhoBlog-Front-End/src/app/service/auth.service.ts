import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient //propriedade sem dentro dos parenteses
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>("http://localhost:8080/usuarios/logar", userLogin)

  }

  cadastrar(user: User): Observable<User> { //observar se o tipo é user
    return this.http.post<User>("http://localhost:8080/usuarios/cadastrar", user)

  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ""){
      ok = true

    }

    return ok
  }

  adm(){
    let ok: boolean = false

    if (environment.tipo == "adm"){
      ok = true

    }

    return ok
  }
}

//service se comunica com o controller do back. Uma rota

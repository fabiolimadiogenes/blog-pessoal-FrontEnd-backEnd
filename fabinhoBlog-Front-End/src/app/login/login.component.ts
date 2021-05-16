import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll (0,0)
    environment.token = ""
    environment.nome = ""
    environment.foto = ""
    environment.id = 0
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) =>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id

      // localStorage.setItem('token', this.userLogin.token)

      // console.log(environment.id)

      this.router.navigate(["/home"])
    }, erro =>{
      if(erro.status == 500){
        this.alertas.showAlertDanger("Usuario ou senha estão incorretos!")
      }
    })
  }
}

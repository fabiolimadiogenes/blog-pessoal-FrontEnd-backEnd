import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  private router: Router

  constructor() { }

  ngOnInit(){
    if(environment.token == ""){
      //alert("Sua seção expirou, faça login novamente")
      this.router.navigate(["/login"])
    }
  }

}

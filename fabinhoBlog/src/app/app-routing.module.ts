import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaComponent } from './tema/tema.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: "", redirectTo: "login", pathMatch: "full"},

  {path:"login", component: LoginComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"home", component: HomeComponent},
  {path:"tema", component: TemaComponent},
  {path:"tema-edit/:id", component: TemaEditComponent},
  {path:"tema-delete/:id", component: TemaDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

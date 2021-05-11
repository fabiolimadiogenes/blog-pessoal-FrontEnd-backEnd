import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
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
  {path:"tema-delete/:id", component: TemaDeleteComponent},
  {path:"postagem-edit/:id", component: PostagemEditComponent},
  {path:"postagem-delete/:id", component: PostagemDeleteComponent},
  {path:"user-edit/:id", component: UserEditComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

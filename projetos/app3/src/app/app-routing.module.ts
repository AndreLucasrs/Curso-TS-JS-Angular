import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcessoComponent} from './acesso/acesso.component';
import {HomeComponent} from './home/home.component';
import {AutenticacaoGuardService} from './autenticacao-guard.service';

export const ROUTES: Routes = [
  { path: '', component: AcessoComponent},
  { path: 'home', component: HomeComponent, canActivate: [AutenticacaoGuardService] }
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

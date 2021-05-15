import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { HomeComponent } from './home/home.component';
import { NutricionalComponent } from './nutricional/nutricional.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Aluno
  {
    path: 'alimentos',
    component: AlimentosComponent
  },
  //Professor
  {
    path: 'nutricional',
    component: NutricionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheComponent } from './detalhe/detalhe.component';
import { Rota1Component } from './rota1.component';

const routes: Routes = [
  { path: 'detalhe', component: DetalheComponent},
  { path: 'detalhe/:id', component: DetalheComponent},
  { path: '**', component: Rota1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rota1RoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheComponent } from './detalhe/detalhe.component';
import { Rota1Component } from './rota1.component';

const routes: Routes = [
  { path: '**', component: Rota1Component },
  { path: 'rota1/detalhe', component: DetalheComponent},
  { path: 'rota1/detalhe/:id', component: DetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rota1RoutingModule { }

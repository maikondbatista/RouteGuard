import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheComponent } from './detalhe/detalhe.component';
import { Rota2Component } from './rota2.component';

const routes: Routes = [
  { path: '**', component: Rota2Component },
  { path: 'detalhe', component: DetalheComponent},
  { path: 'detalhe/:id', component: DetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Rota2RoutingModule { }

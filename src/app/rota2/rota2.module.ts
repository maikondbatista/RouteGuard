import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rota2RoutingModule } from './rota2-routing.module';
import { Rota2Component } from './rota2.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [Rota2Component, DetalheComponent,],
  imports: [
    CommonModule,
    Rota2RoutingModule,
    SharedModule.forRoot()
  ]
})
export class Rota2Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Rota1RoutingModule } from './rota1-routing.module';
import { Rota1Component } from './rota1.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Rota1Component,
    DetalheComponent
  ],
  imports: [
    CommonModule,
    Rota1RoutingModule,
    SharedModule.forRoot()
  ]
})
export class Rota1Module { }

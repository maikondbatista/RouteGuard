import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule,
    NgbAlertModule
  ]
})
export class UnauthorizedModule { }

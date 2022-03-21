import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rota1',
  templateUrl: './rota1.component.html',
  styleUrls: ['./rota1.component.scss']
})
export class Rota1Component {

  constructor(private router: Router) { }
   
  details(detail: any){
    this.router.navigate(["rota1/detalhe/"+detail]);
  }
}

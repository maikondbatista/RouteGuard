import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rota2',
  templateUrl: './rota2.component.html',
  styleUrls: ['./rota2.component.scss']
})
export class Rota2Component {

  constructor(private router: Router) { }
   
  details(detail: any){
    this.router.navigate(["rota2/detalhe/"+detail]);
  }

}

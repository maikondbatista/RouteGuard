import { Component, OnInit } from '@angular/core';
import { RouteModel } from '../../models/route.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public routes: RouteModel[] = [
    {description: 'Home', route: 'home'},
    {description: 'Rota 1', route: 'rota1'},
    {description: 'Rota 2', route: 'rota2'},
    {description: 'Login', route: 'login'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

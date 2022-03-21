import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { RouteModel } from '../../models/route.model';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  isLoggedIn = true;
  user$!: Observable<UserModel>;
  public routes: RouteModel[] = [
    { description: 'Home', route: 'home' },
    { description: 'Rota 1', route: 'rota1' },
    { description: 'Rota 2', route: 'rota2' },
  ];

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.UserSubject;
  }

 
}

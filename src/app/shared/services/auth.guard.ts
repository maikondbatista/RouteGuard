import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, private router: Router,) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.user;
        if (currentUser) {
          let routePath = '/'+route.url[0].path;
            if ((currentUser.rotas).indexOf(routePath) === -1) {
                // Not allowed
                this.router.navigate(['/unauthorized']);
                return false;
            }
            // Allowed
            return true;
        }

        // Not logged in
        this.router.navigate(['/login']);
        return true;
  }
}
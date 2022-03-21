import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule
      ),
      canActivate: [AuthGuard] 
  },
  {
    path: 'rota1',
    loadChildren: () =>
      import('./rota1/rota1.module').then(
        (m) => m.Rota1Module
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'rota2',
    loadChildren: () =>
      import('./rota2/rota2.module').then(
        (m) => m.Rota2Module
      ),
    canActivate: [AuthGuard] 
  },
  {
    path: 'unauthorized',
    loadChildren: () =>
      import('./unauthorized/unauthorized.module').then(
        (m) => m.UnauthorizedModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  { path: '**', redirectTo: 'home' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

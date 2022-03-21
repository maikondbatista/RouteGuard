import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, take } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user!: UserModel;
  public UserSubject: Subject<UserModel> = new Subject<UserModel>();
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}
  public isAuthenticated(): boolean {
    return true;
  }

  Login(data: LoginModel) {
    this.GetLoginDb()
      .pipe(take(1))
      .subscribe((db) => {
        let user = db.usuarios[data.user];
        if (!user || user.senha != data.password) {
          this.toastr.error('Usuário ou senha invalido!');
          return;
        } else {
          this.user = user;
          this.UserSubject.next(this.user);
        }
      });
  }

  LogOff() {
    this.user = {} as UserModel;
    this.UserSubject.next(this.user);
  }

  GetLoginDb(): Observable<any> {
    return this.httpClient.get<any>('/assets/db.json');
  }
}

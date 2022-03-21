import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private toastrService: ToastrService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    this.authService.LogOff();
    if(!this.form.valid)
    {
      this.toastrService.error("Por favor informe login e senha.");
      return;
    }
    this.authService.Login(this.form.value);
    this.router.navigate(['home']);
  }
}

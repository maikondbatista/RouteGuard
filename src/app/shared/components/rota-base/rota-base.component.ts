import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rota-base',
  templateUrl: './rota-base.component.html',
  styleUrls: ['./rota-base.component.scss'],
})
export class RotaBaseComponent implements OnInit {
  @Output() onClickDetails: EventEmitter<number> = new EventEmitter<number>();
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      detail: [null, Validators.required],
    });
  }

  details() {
    if (this.form.invalid) {
      this.toastr.error('Informe um detalhe para visualizar');
      return;
    }
    let detail = this.form.value.detail;
    this.onClickDetails.emit(detail);
  }
}

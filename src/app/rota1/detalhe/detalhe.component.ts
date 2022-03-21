import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {
  id!: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.id = this.activatedRoute.snapshot.params['id'];
  }

}

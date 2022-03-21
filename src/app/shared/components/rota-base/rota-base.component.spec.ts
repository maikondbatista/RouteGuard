import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaBaseComponent } from './rota-base.component';

describe('RotaBaseComponent', () => {
  let component: RotaBaseComponent;
  let fixture: ComponentFixture<RotaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

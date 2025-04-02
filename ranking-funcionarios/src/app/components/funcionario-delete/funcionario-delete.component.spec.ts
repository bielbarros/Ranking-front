import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioDeleteComponent } from './funcionario-delete.component';

describe('FuncionarioDeleteComponent', () => {
  let component: FuncionarioDeleteComponent;
  let fixture: ComponentFixture<FuncionarioDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionarioDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMercadoriaComponent } from './cadastro-mercadoria.component';

describe('CadastroMercadoriaComponent', () => {
  let component: CadastroMercadoriaComponent;
  let fixture: ComponentFixture<CadastroMercadoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMercadoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

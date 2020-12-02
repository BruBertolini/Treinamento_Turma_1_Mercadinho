import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MercadoriaService } from '../mercadoria.service';

import { ListaMercadoriasComponent } from './lista-mercadorias.component';

describe('ListaMercadoriasComponent', () => {
  let component: ListaMercadoriasComponent;
  let fixture: ComponentFixture<ListaMercadoriasComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMercadoriasComponent ],
      imports:[
        RouterTestingModule
      ],
      providers:[
        { provide: MercadoriaService, useValue: { listar(){ return of([]) } } }
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMercadoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should irParaCadastro', () => {
    const spyRouter = spyOn(router, 'navigate').and.stub();
    component.irParaCadastro();
    expect(spyRouter).toHaveBeenCalled();
    expect(spyRouter).toHaveBeenCalledWith(['/cadastro']);
  });
});

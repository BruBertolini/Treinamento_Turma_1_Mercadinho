import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MercadoriaService } from './mercadoria.service';
import { Mercadoria } from './models/mercadoria';

describe('MercadoriaService', () => {
  let service: MercadoriaService;
  let mockHttp: HttpTestingController;

  const baseUrl = 'http://localhost:5000/api/v1';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[MercadoriaService]
    });
    service = TestBed.inject(MercadoriaService);
    mockHttp = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute salvarMercadoria', () => {
    const mockMercadoria = new Mercadoria();
    service.salvarMercadoria(mockMercadoria)
    .subscribe(resposta => {
      expect(resposta).toBeTruthy();
    })

    const req = mockHttp.expectOne(`${baseUrl}/add`);
    expect(req.request.url).toBe(`${baseUrl}/add`);
    expect(req.request.method).toBe('POST');
  
    req.flush(JSON.stringify(true));

  });
});

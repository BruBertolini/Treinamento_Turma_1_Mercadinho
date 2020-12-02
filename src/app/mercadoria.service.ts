import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mercadoria } from './models/mercadoria';

@Injectable()
export class MercadoriaService {

  private baseUrl = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  salvarMercadoria(mercadoria: Mercadoria){
    return this.http.post(this. baseUrl + '/add', mercadoria)
  }

  atualizarMercadoria(mercadoria: Mercadoria){
    return this.http.put(this. baseUrl + '/update', mercadoria)
  }

  listar(){
    return this.http.get(this.baseUrl + '/list');
  }
}

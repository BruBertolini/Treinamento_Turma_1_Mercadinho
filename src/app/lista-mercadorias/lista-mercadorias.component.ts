import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-mercadorias',
  templateUrl: './lista-mercadorias.component.html',
  styleUrls: ['./lista-mercadorias.component.scss']
})
export class ListaMercadoriasComponent implements OnInit {

  lista = [
    { nome: 'Mercadoria 1', preco:1 , quantidade:1 , descricao:'Descricao 1', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 2', preco:2 , quantidade:2 , descricao:'Descricao 2', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 3', preco:3 , quantidade:3 , descricao:'Descricao 3', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 4', preco:4 , quantidade:4 , descricao:'Descricao 4', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 5', preco:5 , quantidade:5 , descricao:'Descricao 5', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 6', preco:6 , quantidade:6 , descricao:'Descricao 6', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 7', preco:7 , quantidade:7 , descricao:'Descricao 7', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 8', preco:8 , quantidade:8 , descricao:'Descricao 8', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 9', preco:9 , quantidade:9 , descricao:'Descricao 9', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 10', preco:0 , quantidade:0 , descricao:'Descricao 0', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 11', preco:1 , quantidade:1 , descricao:'Descricao 1', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 12', preco:2 , quantidade:2 , descricao:'Descricao 2', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 13', preco:3 , quantidade:3 , descricao:'Descricao 3', categoria: 'CATEGORIA' },
    { nome: 'Mercadoria 14', preco:4 , quantidade:4 , descricao:'Descricao 4', categoria: 'CATEGORIA' },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaCadastro(){
    this.router.navigate(['/cadastro']);
  }

}

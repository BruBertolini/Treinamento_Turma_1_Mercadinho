import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-mercadoria',
  templateUrl: './cadastro-mercadoria.component.html',
  styleUrls: ['./cadastro-mercadoria.component.scss'],
})
export class CadastroMercadoriaComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      preco: [0, [Validators.required, Validators.min(0)]],
      quantidade: [0, [Validators.required, Validators.min(1)]],
      descricao: [''],
      categoria:['', [Validators.required]]

    });
  }

  ngOnInit(): void {}

  salvar(){
    console.log(this.formulario)
  }
}


//  { nome: 'Mercadoria 1', preco:1 , quantidade:1 , descricao:'Descricao 1', categoria: 'CATEGORIA' },
   
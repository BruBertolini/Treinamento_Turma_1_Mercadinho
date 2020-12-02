import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MercadoriaService } from '../mercadoria.service';

@Component({
  selector: 'app-cadastro-mercadoria',
  templateUrl: './cadastro-mercadoria.component.html',
  styleUrls: ['./cadastro-mercadoria.component.scss'],
})
export class CadastroMercadoriaComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private servico: MercadoriaService) {
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
    // console.log(this.formulario)
    if(this.formulario.valid){
      this.servico.salvarMercadoria(this.formulario.getRawValue())
      .subscribe(respostaPositiva => {
        alert('Cadastrado com sucesso!');
        console.log(respostaPositiva);
        this.formulario.reset();
      }, 
      error => {
        console.log(error);
      });
    }
  }
}


//  { nome: 'Mercadoria 1', preco:1 , quantidade:1 , descricao:'Descricao 1', categoria: 'CATEGORIA' },
   
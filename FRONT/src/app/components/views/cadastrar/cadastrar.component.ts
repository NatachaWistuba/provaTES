import { Component, OnInit } from '@angular/core';

import Livro from '../../../model/livro';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nome?: string;
 preco?: string;
   isbn?: string;

  constructor() { 

  }
  model = new Livro(
    
  );
  ngOnInit(): void {
  }
  onClickSubmit(data:Livro) {
    console.log(this.nome);
    console.log(data);
 }

}

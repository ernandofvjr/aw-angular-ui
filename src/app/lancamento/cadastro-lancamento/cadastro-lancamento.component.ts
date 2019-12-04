import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-lancamento',
  templateUrl: './cadastro-lancamento.component.html',
  styleUrls: ['./cadastro-lancamento.component.css']
})
export class CadastroLancamentoComponent implements OnInit {

  constructor(private title: Title) { }
  tipos = [ {label: 'Receita', value: 'RECEITA'}, {label: 'Despesa', value: 'DESPESA'}];

  categorias = [{label: 'Alimentação', value: 0}, {label: 'Transporte', value: 1}];

  pessoas = [{label: 'João Sebastião', value: 1}, {label: 'Rodrigo Souza', value: 2}, {label: 'Carlos Henrique', value: 3}];

  ngOnInit() {
    this.title.setTitle('Cadastro de lançamento');
  }

}

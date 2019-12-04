import { LancamentoFilter } from './../../core/classes/lancamento-filter';
import { LancamentoService } from './../../core/services/lancamento.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-lancamento',
  templateUrl: './pesquisa-lancamento.component.html',
  styleUrls: ['./pesquisa-lancamento.component.css']
})
export class PesquisaLancamentoComponent implements OnInit {

  constructor(private title: Title, private lancamentoService: LancamentoService) { }
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2017, 5, 10),
      dataPagamento: new Date(2017, 5, 30), valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2017, 6, 20),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2017, 5, 5),
      dataPagamento: new Date(2017, 4, 30), valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2017, 7, 18),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2017, 6, 10),
      dataPagamento: new Date(2017, 6, 9), valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 6, 13),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];
  filtro = new LancamentoFilter();

  ngOnInit() {
    this.title.setTitle('Pesquisa de lançamentos');
  }


  pesquisar() {
    this.filtro.descricao = 'Salário';

    this.lancamentoService.pesquisar(this.filtro).subscribe((resultado) => {
      console.log(resultado);
    });

  }

}

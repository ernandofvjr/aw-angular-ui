import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api/public_api';

import {ConfirmationService} from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

import { Pessoa } from 'src/app/domain/pessoa.model';
import { PessoaService } from './../../core/services/pessoa.service';
import { PessoaFilter } from './../../core/classes/pessoa-filter';

@Component({
  selector: 'app-pesquisa-pessoa',
  templateUrl: './pesquisa-pessoa.component.html',
  styleUrls: ['./pesquisa-pessoa.component.css']
})
export class PesquisaPessoaComponent implements OnInit {

  constructor(private title: Title, private pessoaService: PessoaService, private toastr: ToastrService,
              private confirmationService: ConfirmationService) { }
  pessoas: Pessoa[] = [];
  filtro: PessoaFilter;
  totalRegistros = 0;
  @ViewChild('tabela', {static: false}) tabela;

  ngOnInit() {
    this.title.setTitle('Pesquisa de pessoas');
    this.filtro = new PessoaFilter();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoaService.pesquisar(this.filtro).subscribe((resultado) => {
      this.totalRegistros = resultado['totalElements'];
      this.pessoas = resultado['content'];
    });

  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(pessoa: any) {
    this.pessoaService.deletar(pessoa.codigo).subscribe(() => {
      this.toastr.success('Pessoa excluída com sucesso!');
      --this.totalRegistros;
      this.tabela.reset();
    });
  }

  confirmarExclusao(pessoa: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  mudarStatus(pessoa: any): void {

    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus).subscribe(() =>{
      const acao = novoStatus ? 'ativada' : 'desativada';
      this.toastr.success(`Pessoa ${acao} com sucesso!`);
      pessoa.ativo = novoStatus;
    });
  }

}

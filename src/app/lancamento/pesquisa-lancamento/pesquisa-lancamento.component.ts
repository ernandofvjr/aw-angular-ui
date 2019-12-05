import { CategoriaService } from './../../core/services/categoria.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api/public_api';
import {ConfirmationService} from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

import { Lancamento } from './../../domain/lancamento.model';
import { ResumoLancamento } from './../../domain/resumo-lancamento.dto';
import { LancamentoFilter } from './../../core/classes/lancamento-filter';
import { LancamentoService } from './../../core/services/lancamento.service';

@Component({
  selector: 'app-pesquisa-lancamento',
  templateUrl: './pesquisa-lancamento.component.html',
  styleUrls: ['./pesquisa-lancamento.component.css']
})
export class PesquisaLancamentoComponent implements OnInit {

  constructor(private title: Title, private lancamentoService: LancamentoService, private toastr: ToastrService,
              private confirmationService: ConfirmationService) { }
  lancamentos: ResumoLancamento[] = [];
  filtro: LancamentoFilter;
  totalRegistros = 0;
  @ViewChild('tabela', {static: false}) tabela;

  ngOnInit() {
    this.title.setTitle('Pesquisa de lançamentos');
    this.filtro = new LancamentoFilter();
  }
  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro).subscribe((resultado) => {
      this.lancamentos = resultado['content'];
      this.totalRegistros = resultado['totalElements'];
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(lancamento: any) {
    this.lancamentoService.deletar(lancamento.codigo).subscribe(() => {
      this.toastr.success('Lançamento excluído com sucesso!');
      --this.totalRegistros;
      this.tabela.reset();
    });
  }

  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

}

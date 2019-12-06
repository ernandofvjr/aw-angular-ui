import { FormControl } from '@angular/forms';
import { Categoria } from './../../domain/categoria.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ToastrService } from 'ngx-toastr';

import { LancamentoService } from './../../core/services/lancamento.service';
import { PessoaService } from './../../core/services/pessoa.service';
import { CategoriaService } from './../../core/services/categoria.service';
import { Lancamento } from 'src/app/domain/lancamento.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-lancamento',
  templateUrl: './cadastro-lancamento.component.html',
  styleUrls: ['./cadastro-lancamento.component.css']
})
export class CadastroLancamentoComponent implements OnInit {

  constructor(private title: Title, private lancamentoService: LancamentoService, private toastr: ToastrService,
              private categoriaService: CategoriaService, private pessoaService: PessoaService,
              private route: ActivatedRoute, private router: Router) { }
  tipos = [ {label: 'Receita', value: 'RECEITA'}, {label: 'Despesa', value: 'DESPESA'}];

  categorias = [];

  pessoas = [];

  lancamento: Lancamento;

  ngOnInit() {
    const codigoLancamento = this.route.snapshot.params.codigo;
    let titulo = 'Cadastro de lançamento';
    this.lancamento = new Lancamento();
    if (codigoLancamento) {
      titulo = 'Edição de lançamento';
      this.carregarLancamento(codigoLancamento);
    }
    this.title.setTitle(titulo);
    this.carregarCategorias();
    this.carregarPessoas();

  }

  carregarCategorias() {
    return this.categoriaService.buscarTodos().subscribe((resultado) => {
      this.categorias = resultado.map(cat => (
        {label: cat.nome, value: cat.codigo}
        ));
    });
  }

  carregarPessoas() {
    return this.pessoaService.buscarTodos().subscribe((resultado) => {
      this.pessoas = resultado.map(pes => (
        {label: pes.nome, value: pes.codigo}
        ));
    });
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }

  }

  voltar() {
    this.router.navigate(['/lancamentos'], {
      relativeTo: this.route
    });
  }

  carregarLancamento(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo).subscribe((resultado) => {
      this.lancamento = resultado;
    });

  }

  get editando() {
    return Boolean(this.lancamento.codigo);
  }

  atualizar(form: FormControl) {
    this.lancamentoService.atualizar(this.lancamento.codigo, this.lancamento).subscribe((resultado) => {
      this.toastr.success('Lançamento atualizado com sucesso!');
      this.voltar();
    });
  }

  adicionar(form: FormControl) {
    this.lancamentoService.salvar(this.lancamento).subscribe((resultado) => {
      this.toastr.success('Lançamento cadastrado com sucesso!');
      this.voltar();
    });
  }

  resetar(form: FormControl) {
    if (this.editando) {
      this.router.navigate(['/lancamentos/novo'], {
        relativeTo: this.route
      });
    } else {
      this.lancamento = new Lancamento();
    }
  }







}

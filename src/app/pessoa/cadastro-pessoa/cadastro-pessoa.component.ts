import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Pessoa } from 'src/app/domain/pessoa.model';
import { PessoaService } from './../../core/services/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private title: Title, private pessoaService: PessoaService, private toastr: ToastrService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const codigoPessoa = this.route.snapshot.params['codigo'];
    let titulo = 'Cadastro de Pessoa';
    this.pessoa = new Pessoa();
    this.pessoa.ativo = true;

    if (codigoPessoa) {
      titulo = 'Edição de Pessoa';
      this.carregarPessoa(codigoPessoa);
    }
    this.title.setTitle(titulo);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }
  }

  voltar() {
    this.router.navigate(['/pessoas'], {
      relativeTo: this.route
    });
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.buscarPorCodigo(codigo).subscribe((resultado) => {
      this.pessoa = resultado;
    });
  }

  get editando() {
    return Boolean(this.pessoa.codigo);
  }

  atualizar(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa.codigo, this.pessoa).subscribe((resultado) => {
      this.toastr.success('Pessoa atualizada com sucesso!');
      this.voltar();
    });
  }

  adicionar(form: FormControl) {
    this.pessoaService.salvar(this.pessoa).subscribe((resultado) => {
      this.toastr.success('Pessoa cadastrado com sucesso!');
      this.voltar();
    });
  }

}

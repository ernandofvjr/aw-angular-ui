import { Categoria } from './categoria.model';
import { Pessoa } from './pessoa.model';
export class Lancamento {
  codigo: number;
  descricao: string;
  tipo = 'RECEITA';
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  categoria = new Categoria();
  pessoa = new Pessoa();
}

import { Categoria } from './categoria.model';
import { Pessoa } from './pessoa.model';
export class Lancamento {
  codigo: number;
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  categoria: Categoria;
  pessoa: Pessoa;
}

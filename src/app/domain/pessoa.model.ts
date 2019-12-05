import { Endereco } from './endereco.model';
export class Pessoa {
  nome: string;
  codigo: number;
  ativo: boolean;
  endereco = new Endereco();

}

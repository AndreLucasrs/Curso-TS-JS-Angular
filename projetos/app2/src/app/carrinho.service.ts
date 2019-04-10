import {ItemCarrinho} from './shared/item-carrinho.model';
import {Oferta} from './shared/oferta.model';

export class CarrinhoService {

  public itens: Array<ItemCarrinho> = new Array<ItemCarrinho>();

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    const itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );

    // o find verifica se existe o objeto dentro do array e o retorna
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  public totalCarrinhoCompras(): number {

    let total: number = 0;
    // recupera o item e soma o total de todos os produtos
    this.itens.map((item: ItemCarrinho) => {
      total += (item.valor * item.quantidade);
    });
    return total;
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {

    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemCarrinho) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  public diminiurQuantidade(itemCarrinho: ItemCarrinho): void {

    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemCarrinho) {
      itemCarrinhoEncontrado.quantidade -= 1;

      if (itemCarrinhoEncontrado.quantidade === 0) {
        // splice servira para remover o item, o primeiro parametro é o indice do item que vc quer remover o segundo é a quantidade a ser removido tipo os 2 primeiros ou 3 ou o primeiro
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
      }
    }
  }

  public limparCarrinho(): void {
    this.itens = new Array<ItemCarrinho>();
  }
}

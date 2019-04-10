import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Oferta} from '../shared/oferta.model';
import {OfertasService} from '../ofertas.service';
import {CarrinhoService} from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasSevice: OfertasService,
    private carrinhoService: CarrinhoService
  ) {
  }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasSevice.getOfertasPorId(parametros.id)
        .then((oferta: Oferta) => this.oferta = oferta);
    });
  }

  ngOnDestroy() {
  }

  public adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(this.oferta);
  }
}

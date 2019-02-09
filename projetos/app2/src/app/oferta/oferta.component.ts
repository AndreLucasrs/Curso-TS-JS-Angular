import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Oferta } from "../shared/oferta.model";
import { OfertasService } from "../ofertas.service";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasSevice: OfertasService
  ) {}

  ngOnInit() {

    this.route.params.subscribe((parametros:Params)=>{
      this.ofertasSevice.getOfertasPorId(parametros.id)
        .then(( oferta:Oferta ) => this.oferta = oferta);
    })
  }

  ngOnDestroy(){

    
  }

}

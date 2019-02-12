import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  // ng g c restaurantes --skipTests=false - para criar componentes novos
  // json-server --watch banco-de-dados.json - para criar levar a api-fake para test
  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    // this.ofertas = this.ofertasService.getOfertas();
    this.ofertasService.getOfertas()
      .then(
        (ofertas: Array<Oferta>) => {
          this.ofertas = ofertas;
        }
      )
      .catch(
        (param: any) => console.log(param)
      );
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Oferta } from "../shared/oferta.model";
import { OfertasService } from "../ofertas.service";
import { interval, Observable, Observer, Subscription } from "rxjs";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription;
  private meuObservableTest: Subscription;

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasSevice: OfertasService
  ) {}

  ngOnInit() {

    this.ofertasSevice.getOfertasPorId(this.route.snapshot.params['id'])
      .then(( oferta:Oferta ) => {
        this.oferta = oferta;
      });

      //observable
      /*
      this.route.params.subscribe(
        (parametros:any) => console.log(parametros),
        (erro:any) => console.log(erro),
        () => console.log("processamento foi classificado como concluido")
      )

      */
      //criamos um observavel
      let tempo = interval(2000);

      //e passa a assitir o observavel atraves do subscribe
      this.tempoObservableSubscription = tempo.subscribe((intervalo:number) => {
        console.log(intervalo);
      })

      

      //observable(observavel)
      let meuObservableTest = Observable.create( (observer:Observer<number>) => {
        observer.next(2)
        observer.next(5)
        //observer.error("algum erro foi encontrado na stream de eventos")
        observer.complete()
        observer.next(3)
      });

      //observable (observador)
      this.meuObservableTest = meuObservableTest.subscribe(
        (resultado:number)=> console.log(resultado+10),
        (erro:string) => console.log(erro),
        () => console.log("Stream de eventos foi finalizado")
      )
  }

  ngOnDestroy(){

    this.meuObservableTest.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
  }

}

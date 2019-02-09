import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service";
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  private ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa.pipe(//retorno Oferta[]
      debounceTime(1000),//executa a ação do switchMao apos 1 segundo
      distinctUntilChanged(),// para fazer a pesquisa distintas
      switchMap((termo: string) => {
        if(termo.trim() === ""){
          //retorna um observable de array de ofertas vazio
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }),
      catchError((erro) => {
        return of<Oferta[]>([])
      })
    );
  }

  public pesquisa(termoPesquisa:string): void {
    this.subjectPesquisa.next(termoPesquisa);
  }

  public limpaPesquisa():void{
    this.subjectPesquisa.next("");
  }

}

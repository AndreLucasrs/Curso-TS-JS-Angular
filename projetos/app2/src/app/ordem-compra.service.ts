import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Pedido} from './shared/pedido.model';
import {URL_API} from './app.api';

@Injectable()
export class OrdemCompraService {

  constructor(private http: HttpClient) { }


  public efetivarCompra(pedido: Pedido): Observable<number>{

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
    });
    const options = {
      headers,
    };

    return this.http.post(`${URL_API}/pedidos`, JSON.stringify(pedido), options).pipe(
      map((resposta: any) => resposta.id)
    );
  }
}

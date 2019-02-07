import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from "./shared/oferta.model";
import { URL_API } from "./app.api";
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators'

@Injectable()
export class OfertasService{

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Array<Oferta>>{

        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta:any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>>{

        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta:any)=> resposta);
    }

    public getOfertasPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta:any)=> resposta.shift());
    }

    public getComoUsarOfertaPorId(id): Promise<String>{

        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta:any)=> resposta[0].descricao);
    }

    public getOndeFicaOfertaPorId(id): Promise<String>{

        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta:any)=> resposta[0].descricao);
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]>{

        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
         .pipe(map((resposta:any)=> resposta),retry(10));

    }
}
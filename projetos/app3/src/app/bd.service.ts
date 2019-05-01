import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {ProgressoService} from './progresso.service';

@Injectable()
export class BdService {

  constructor(private progresso: ProgressoService) {
  }

  public publicar(publicacao: any): void {

    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
      .push({
        titulo: publicacao.titulo
      }).then((resposta: any) => {

      const nomeImagem = resposta.key;

      firebase.storage().ref()
        .child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem)
        .on(firebase.storage.TaskEvent.STATE_CHANGED,
          // acompanhamento do progresso do upload
          (snapshot: any) => {
            this.progresso.status = 'andamento';
            this.progresso.estado = snapshot;
          },
          (erro) => {
            this.progresso.status = 'erro';
          },
          () => {
            this.progresso.status = 'concluido';
          });
    });
  }
}

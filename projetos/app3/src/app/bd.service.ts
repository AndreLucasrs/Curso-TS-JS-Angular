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

  public consultaPublicacoes(emailUsuario: string): Promise<any> {

    return new Promise((resolve, reject) => {
      // consultar as publicacoes do database
      firebase.database().ref(`publicacoes/${btoa(emailUsuario)}`)
        .orderByKey()
        .once('value')
        .then((snapshot: any) => {

          let publicacoes: Array<any> = [];

          snapshot.forEach((childSnapshot: any) => {
            let publicacao = childSnapshot.val();
            publicacao.key = childSnapshot.key;
            publicacoes.push(publicacao);
          });

          return publicacoes.reverse();
        })
        .then((publicacoes: any) => {

          publicacoes.forEach((publicacao) => {
            // consulta a url da imagem
            firebase.storage().ref()
              .child(`imagens/${publicacao.key}`)
              .getDownloadURL()
              .then((url: string) => {
                publicacao.url_imagem = url;

                // consulta o nome do usuario
                firebase.database().ref(`usuario_detalhe/${btoa(emailUsuario)}`)
                  .once('value')
                  .then((snaps: any) => {

                    publicacao.nome_usuario = snaps.val().nome_usuario;
                  });
              });
          });
          resolve(publicacoes);
        });
    });
  }
}

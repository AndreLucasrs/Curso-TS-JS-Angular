import * as firebase from 'firebase';

export class BdService {

  public publicar(publicacao: any): void {

    const nomeImagem = Date.now();
    firebase.storage().ref()
      .child(`imagens/${nomeImagem}`)
      .put(publicacao.imagem)
      .on(firebase.storage.TaskEvent.STATE_CHANGED,
        // acompanhamento do progresso do upload
        (snapshot: any) => {
          console.log(snapshot);
        },
        (erro) => {
          console.log(erro);
        },
        () => {
          console.log('upload completo');
        });

    // firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
    //   .push({
    //     titulo: publicacao.titulo
    //   });
  }
}

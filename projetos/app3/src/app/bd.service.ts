import * as firebase from 'firebase';

export class BdService {

  public publicar(publicacao: any): void {
    console.log('Servico de dados');
    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
      .push({
        titulo: publicacao.titulo
      });
  }
}

import {Usuario} from './acesso/usuario.model';
import * as firebase from 'firebase';

export class AutenticacaoService {

  public cadastrarUsuario(usuario: Usuario): Promise<any> {

    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(response => {
        // remove a senha do usuario
        delete usuario.senha;
        // registrando dados complementares do usuario no path email na base64
        firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario);
      })
      .catch((err: Error) => console.log(err));
  }

  public autenticar(email: string, senha: string): void {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(response => console.log('sucesso'))
      .catch((error: Error) => console.log(error));
  }
}

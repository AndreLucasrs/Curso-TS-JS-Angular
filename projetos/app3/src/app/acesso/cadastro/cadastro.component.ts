import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../usuario.model';
import {AutenticacaoService} from '../../autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null, [ Validators.required, Validators.email]),
    nome_completo: new FormControl(null, [Validators.required]),
    nome_usuario: new FormControl(null, [Validators.required]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
  constructor(
    public autenticacao: AutenticacaoService
  ) { }

  ngOnInit() {
  }

  public exibirPainelLogin(): void {

    this.exibirPainel.emit('login');
  }

  public cadastrarUsuario(): void {
    const usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    );

    this.autenticacao.cadastrarUsuario(usuario)
      .then(() => this.exibirPainelLogin())
      .catch((error: Error) => console.log(error));
  }
}

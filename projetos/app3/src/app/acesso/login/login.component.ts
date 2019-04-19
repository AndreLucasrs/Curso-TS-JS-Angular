import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as firebase from 'firebase';
import {AutenticacaoService} from '../../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(),
    'senha': new FormControl()
  });
  constructor(
    private autenticacao: AutenticacaoService
  ) { }

  ngOnInit() {
  }

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro');
  }

  public autentincar(): void {
    this.autenticacao.autenticar(this.formulario.value.email, this.formulario.value.senha);
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BdService} from '../../bd.service';
import * as firebase from 'firebase';
import {ProgressoService} from '../../progresso.service';
import {interval, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string;
  private imagem: any;
  public progressoPublicacao: string = 'pendente';
  public porgentagemUpload: number;
  @Output() public atualizarTimeLine: EventEmitter<any> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    titulo: new FormControl()
  });

  constructor(private bdService: BdService, private progresso: ProgressoService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
    });
  }

  public publicar(): void {
    this.bdService.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    });

    let continua = new Subject();
    continua.next(true);

    let acompanhamentoUpload = interval(2000);

    acompanhamentoUpload.pipe(takeUntil(continua)).subscribe(() => {

      this.progressoPublicacao = 'andamento';
      this.porgentagemUpload = Math.round(( this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes ) * 100);
      if (this.progresso.status === 'concluido') {
        this.progressoPublicacao = 'concluido';

        // emitir um evento para o component parent
        this.atualizarTimeLine.emit();
        continua.next(false);
      }
    });
  }

  public preparaImagemUpload(event: Event): void {
    this.imagem = ( event.target as HTMLInputElement).files;
  }
}

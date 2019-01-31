import { Component, OnInit } from '@angular/core';

import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;
  public instrucao: string = "Traduza a frase";
  public resposta: string = "";
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() { 

    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta : Event): void{
    
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void{
    
    if(this.rodadaFrase.frasePtBr == this.resposta.trim()){

      alert("Tradução correta");

      //troca pergunta da rodada
      this.rodada++;

      //progresso
      this.progresso += (100 / this.frases.length);

      //atualiza o objeto da rodada
      this.atualizaRodada();

    }else{

      alert("Tradução errada");
    }
  }

  public atualizaRodada(): void{

    //atualiza o objeto da rodada
    this.rodadaFrase = this.frases[this.rodada];
    
    //limpa resposta
    this.resposta = "";
  }

}

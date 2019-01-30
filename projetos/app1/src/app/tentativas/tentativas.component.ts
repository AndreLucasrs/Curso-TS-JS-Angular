import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  //property binding [], usando nos atributos do HTML
  //string interpolation {{}}, usando para passar os valores para o HTML 
  //e tambem pode ser usado para passar valor aos atributos do HTML
  //não usar os dois juntos

  //exemplos sendo utilizado tentativas.component.html - property binding
  //topo.component.html - string interpolation
  public coracaoVazio: string = "/assets/coracao_vazio.png";
  public coracaoCheio: string = "/assets/coracao_cheio.png";

  constructor() { }

  ngOnInit() {
  }

}

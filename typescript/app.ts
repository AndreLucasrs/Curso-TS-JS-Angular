let ola = (nome:string,sobreNome:string) => console.log("Ola " + nome+" "+sobreNome);

ola("Andre","Lucas");

//Inferencia de tipos
let mensagem: string = "Seja bem vindo!";
let temporadasFriends: number = 10;
let estudandoAngular: boolean = true;

let listaDeFrutas: Array<string> = ["Uva","Banana","Maçã"];
let listaDeFrutas2: string[] = ["Uva","Banana","Maçã"];

let notasDasProvas: Array<number> = [8,7,8];

//Quando declarado o valor da inferencia
//exemplo
//let teste = "a"
//não tem necessidade de colocar qual é o tipo
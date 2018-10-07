import Carro from "./Carro"
import Pessoa from "./Pessoa"
import Concessionaria from "./Concessionaria"

/*- criar carros -*/
let carroA = new Carro("dodge",4);
let carroB = new Carro("veloster",3);
let carroC = new Carro("cerato",4);

/*- montar a lista de carros da concessionario -*/
let listaDeCarro: Array<Carro> = [carroA,carroB,carroC];

let concessionario = new Concessionaria("Avenida Paulista",listaDeCarro);

//Compra carro
let cliente = new Pessoa("Joao","cerato");

concessionario.mostraListaDeCarro().map((carro: Carro) =>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){

        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQuemTem());


import Carro from "./Carro"
import { ConcessionariaInterface } from "./ConcessionariaInterface"

export default class Concessionaria implements ConcessionariaInterface{

    private endereco: string = "";
    private listaDeCarro: Array<Carro>;

    constructor(endereco:string, listaDeCarro:Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarro = listaDeCarro;
    }

    public forneceEndereco(): string {
        return this.endereco;
    }

    public mostraListaDeCarro(): Array<Carro>{
        return this.listaDeCarro;
    }

    fornecerHorarioDeFuncionamento(): string {
        return "De segunda a sexta de 08:00 as 18:00 e sabado das 08:00 a 12:00";
    }
}
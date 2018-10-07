import Carro from "./Carro"

export default class Pessoa{

    private nome: string = "";
    private carroPreferido: string = "";
    private carro: any;

    constructor(nome:string,carroPreferido:string){
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNomer(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carro:Carro): void {
        this.carro = carro;
    }

    public dizerCarroQuemTem(): Carro{
        return this.carro;
    }
}
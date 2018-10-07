import Veiculo from "./Veiculo";

export default class Moto extends Veiculo {

    //Sobreescrita
    public acelerar(): void {
        this.velocidade = this.velocidade + 20;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarro) {
        this.endereco = "";
        this.endereco = endereco;
        this.listaDeCarro = listaDeCarro;
    }
    Concessionaria.prototype.forneceEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostraListaDeCarro = function () {
        return this.listaDeCarro;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return "De segunda a sexta de 08:00 as 18:00 e sabado das 08:00 a 12:00";
    };
    return Concessionaria;
}());
exports.default = Concessionaria;

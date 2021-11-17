class cuenta {

    saldo: number
    constructor(saldo:number){
        this.saldo=saldo;
    }
    retirar(monto: number) {
        return this.saldo - monto
    }
}

let cta = new cuenta(50000);

let monto = parseInt(prompt("Ingrese monto a retirar"));
let resultado = cta.retirar(monto);
if (resultado >= 0)
    document.write("Tu saldo actual es: " + resultado);
else
    document.write("El saldo es insuficiente para realizar la acción");
